import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Post } from 'src/app/interfaces/post.model';
import { Page } from '../../interfaces/page.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private readonly url = '/api/posts';
  token: string;

  constructor(private http: HttpClient) {}

  getMyPosts() {
    return this.http.get<{ data: Post[] }>(`${this.url}/me`);
  }

  deleteMyPost(id: string) {
    return this.http.delete<Post>(`${this.url}/${id}/me`);
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

  getPost(id: string) {
    return this.http.get<Post>(`${this.url}/${id}`);
  }

  getPosts(page: number, pageSize: number) {
    return this.http.get<{ data: Post[]; page: Page }>(
      `${this.url}?page=${page}&pageSize=${pageSize}`
    );
  }

  createPost(post) {
    const postData = new FormData();
    postData.append('title', post.title);
    postData.append('content', post.content);
    postData.append('image', post.image);

    return this.http.post<Post>(this.url, postData);
  }

  deletePost(postId: string) {
    return this.http.delete<Post>(`${this.url}/${postId}`);
  }
}
