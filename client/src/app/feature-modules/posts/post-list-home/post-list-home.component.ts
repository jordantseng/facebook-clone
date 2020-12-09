import { Component, OnInit, OnDestroy } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from 'src/app/interfaces/auth.model';
import { Page } from 'src/app/interfaces/page.model';
import { Post } from 'src/app/interfaces/post.model';

import { PostsService } from '../posts.service';
import { AuthService } from 'src/app/feature-modules/auth/auth.service';
import { ErrorService } from 'src/app/error.service';

@Component({
  selector: 'app-post-list-home',
  templateUrl: './post-list-home.component.html',
  styleUrls: ['./post-list-home.component.css'],
})
export class PostListHomeComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  page: Page = {
    pageSize: 3,
    currentPage: 1,
    totalData: 0,
    totalPage: 0,
  };

  loading: boolean;
  loggedinUser: User;
  errorMessage: string;

  private userSub: Subscription;
  private errorSub: Subscription;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private errorService: ErrorService
  ) {}

  ngOnInit(): void {
    this.userSub = this.authService.user$.subscribe((user) => {
      this.loggedinUser = user;
    });

    this.errorSub = this.errorService.error$.subscribe((error) => {
      this.loading = false;
      this.errorMessage = error.error.message;
    });

    this.route.queryParamMap
      .pipe(
        switchMap((qp: ParamMap) => {
          const currentPage = +qp.get('page') || this.page.currentPage;
          const pageSize = +qp.get('pageSize') || this.page.pageSize;
          this.loading = true;
          return this.postsService.getPosts(currentPage, pageSize);
        })
      )
      .subscribe((res) => {
        this.posts = res.data;
        this.page = res.page;
        this.loading = false;
      });

    // this.route.queryParamMap.subscribe((qp: ParamMap) => {
    //   const currentPage = +qp.get('page') || this.page.currentPage;
    //   const pageSize = +qp.get('pageSize') || this.page.pageSize;
    //   // this.loading = true;
    //   this.postsService.fetchPosts(currentPage, pageSize);
    // });
  }

  onDeletePost(id: string) {
    this.loading = true;
    this.errorMessage = '';
    this.postsService.deleteMyPost(id).subscribe((deletedPost) => {
      this.posts = this.posts.filter((post) => post._id !== deletedPost._id);
      this.loading = false;

      this.reloadPage();
    });
  }

  onClickLike({ postId }) {
    // optimistic update
    const index = this.posts.findIndex((post) => post._id === postId);
    const prevLikes = [...this.posts[index].likes];
    const alreadyExsist = this.posts[index].likes.find(
      (like) => like.user === this.loggedinUser._id
    );

    if (alreadyExsist) {
      this.posts[index].likes = this.posts[index].likes.filter(
        (like) => like.user !== this.loggedinUser._id
      );
    } else {
      this.posts[index].likes.push({ user: this.loggedinUser._id });
    }

    const likeIndex = this.posts[index].likes.findIndex(
      (like) => like.user === this.loggedinUser._id
    );

    this.postsService.likePost(postId, this.loggedinUser._id).subscribe(
      (res) => {
        this.posts[index].likes[likeIndex] = res;
      },
      (error) => {
        this.posts[index].likes = prevLikes;
      }
    );
  }

  onCommentSubmit({ commentValue, postId }) {
    // optimistic update
    const index = this.posts.findIndex((p) => p._id === postId);

    const prevComments = [...this.posts[index].comments];

    this.posts[index].comments = [
      ...this.posts[index].comments,
      {
        user: this.loggedinUser._id,
        avatar: this.loggedinUser.avatar,
        name: this.loggedinUser.name,
        content: commentValue,
      },
    ];

    this.postsService.createPostComment(commentValue, postId).subscribe(
      (newComment) => {
        const comments = [...this.posts[index].comments];

        const lastIndex = comments.length - 1;

        comments[lastIndex] = newComment;

        this.posts[index].comments = comments;
      },
      (error) => {
        this.posts[index].comments = prevComments;
      }
    );
  }

  onDeleteComment({ postId, commentId }) {
    // optimistic update
    const index = this.posts.findIndex((p) => p._id === postId);

    const prevComments = [...this.posts[index].comments];

    const filteredComments = this.posts[index].comments.filter(
      (comment) => comment._id !== commentId
    );

    this.posts[index].comments = filteredComments;

    this.postsService.deletePostComment(postId, commentId).subscribe(
      () => {},
      (error) => {
        this.posts[index].comments = prevComments;
      }
    );
  }

  onChangePage(e: PageEvent) {
    this.router.navigate(['./'], {
      relativeTo: this.route,
      queryParams: {
        page: e.pageIndex + 1,
        pageSize: e.pageSize,
      },
    });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
    this.errorSub.unsubscribe();
  }

  private reloadPage() {
    this.router.navigate(['./'], {
      relativeTo: this.route,
      queryParams: {
        ts: Date.now().toString(),
      },
      queryParamsHandling: 'merge',
      skipLocationChange: true,
    });
  }
}
