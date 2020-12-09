import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { User } from 'src/app/interfaces/auth.model';

import { PostsService } from '../posts.service';
import { AuthService } from 'src/app/feature-modules/auth/auth.service';
import { ErrorService } from 'src/app/error.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
})
export class EditPostComponent implements OnInit, OnDestroy {
  loggedInUser: User;
  initialFormValue = {
    title: '',
    content: '',
    image: '',
  };
  postId: string;
  loading: boolean;
  errorMessage: string;
  errorSub: Subscription;
  authSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postsService: PostsService,
    private authService: AuthService,
    private errorService: ErrorService
  ) {}

  ngOnInit(): void {
    this.errorSub = this.errorService.error$.subscribe((error) => {
      this.errorMessage = error.error.message;
    });

    this.authSub = this.authService.user$.subscribe((user) => {
      this.loggedInUser = user;
    });

    this.route.paramMap
      .pipe(
        switchMap((pm: ParamMap) => {
          this.postId = pm.get('id');

          this.loading = true;
          return this.postsService.fetchPost(this.postId);
        })
      )
      .subscribe((postValue) => {
        this.initialFormValue = postValue;

        this.loading = false;
      });
  }

  onEditPost(postValue) {
    this.postsService.updateMyPost(this.postId, postValue).subscribe(() => {
      this.router.navigate(['../../'], { relativeTo: this.route });
    });
  }

  ngOnDestroy() {
    this.errorSub.unsubscribe();
    this.authSub.unsubscribe();
  }
}
