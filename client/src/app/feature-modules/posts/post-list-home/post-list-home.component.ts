import { Component, OnInit, OnDestroy } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
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
