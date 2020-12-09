import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Post, Comment } from 'src/app/interfaces/post.model';
import { Page } from '../../interfaces/page.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private readonly url = '/api/posts';
  token: string;

  posts$: BehaviorSubject<Post[]> = new BehaviorSubject([]);
  page$: BehaviorSubject<Page> = new BehaviorSubject({
    pageSize: 3,
    currentPage: 1,
    totalData: 0,
    totalPage: 0,
  });

  constructor(private http: HttpClient) {}

  private getPosts() {
    return this.posts$.getValue();
  }

  fetchMyPosts() {
    this.http.get<any>(`${this.url}/me`).subscribe((res) => {
      this.posts$.next(res.data);
    });
  }

  updateMyPost(postId: string, post: Post) {
    let postData: Post | FormData;

    if (typeof post.image === 'string') {
      postData = post;
    }

    if (typeof post.image === 'object') {
      postData = new FormData();

      postData.append('title', post.title);
      postData.append('content', post.content);
      postData.append('image', post.image);
    }

    return this.http.put(`${this.url}/${postId}/me`, postData);
  }

  deleteMyPost(id: string) {
    // optimistic update
    const prevPosts = this.posts$.getValue();
    this.posts$.next(this.posts$.getValue().filter((post) => post._id !== id));

    this.http.delete<Post>(`${this.url}/${id}/me`).subscribe(
      () => {},
      (error) => {
        this.posts$.next(prevPosts);
      }
    );
  }

  createPost(post) {
    const postData = new FormData();
    postData.append('title', post.title);
    postData.append('content', post.content);
    postData.append('image', post.image);

    return this.http.post<Post>(this.url, postData);
  }

  fetchPost(id: string) {
    return this.http.get<Post>(`${this.url}/${id}`);
  }

  deletePost(postId: string) {
    return this.http.delete<Post>(`${this.url}/${postId}`);
  }

  fetchPosts(page: number, pageSize: number) {
    this.http
      .get<{ data: Post[]; page: Page }>(
        `${this.url}?page=${page}&pageSize=${pageSize}`
      )
      .subscribe((res) => {
        this.posts$.next(res.data);
        this.page$.next(res.page);
      });
  }

  likePost(postId: string, userId: string) {
    // optimistic update
    const posts = [...this.getPosts()];

    const index = posts.findIndex((post) => post._id === postId);

    const prevLikes = [...posts[index].likes];

    const alreadyLiked = posts[index].likes.find(
      (like) => like.user === userId
    );

    if (alreadyLiked) {
      posts[index].likes = posts[index].likes.filter(
        (like) => like.user !== userId
      );
    } else {
      posts[index].likes.push({ user: userId });
    }

    this.posts$.next(posts);

    this.http
      .patch<{ _id: string; user: string } | undefined>(
        `${this.url}/${postId}/like`,
        { userId }
      )
      .subscribe(
        (res) => {
          const likeIndex = posts[index].likes.findIndex(
            (like) => like.user === userId
          );

          posts[index].likes[likeIndex] = res;

          this.posts$.next(posts);
        },
        (error) => {
          posts[index].likes = prevLikes;

          this.posts$.next(posts);
        }
      );
  }

  createComment(formValue: any, postId: string, loggedinUser) {
    const posts = [...this.getPosts()];

    const index = posts.findIndex((p) => p._id === postId);

    const prevComments = [...posts[index].comments];

    posts[index].comments = [
      ...posts[index].comments,
      {
        user: loggedinUser._id,
        avatar: loggedinUser.avatar,
        name: loggedinUser.name,
        content: formValue.comment,
      },
    ];

    this.http
      .post<Comment>(`${this.url}/${postId}/comments`, formValue)
      .subscribe(
        (comment) => {
          const comments = [...posts[index].comments];
          const lastIndex = comments.length - 1;

          comments[lastIndex] = comment;
        },
        (error) => {
          posts[index].comments = prevComments;
        }
      );
  }

  deleteComment(postId: string, commentId: string) {
    // optimistic update
    const posts = [...this.getPosts()];

    const index = posts.findIndex((post) => post._id === postId);

    const prevComments = [...posts[index].comments];

    const filteredComments = posts[index].comments.filter(
      (comment) => comment._id !== commentId
    );

    posts[index].comments = filteredComments;

    this.posts$.next(posts);

    this.http
      .delete<null>(`${this.url}/${postId}/comments/${commentId}`)
      .subscribe(
        () => {},
        (error) => {
          posts[index].comments = prevComments;
        }
      );
  }
}
