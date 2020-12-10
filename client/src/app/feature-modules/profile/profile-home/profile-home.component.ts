import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { Subscription } from 'rxjs';
import { filter, switchMap, tap } from 'rxjs/operators';

import { User } from 'src/app/interfaces/auth.model';
import { Post } from 'src/app/interfaces/post.model';

import { PostsService } from '../../posts/posts.service';
import { ProfileService } from '../profile.service';

import { EditProfileComponent } from '../edit-profile/edit-profile.component';
import { EditPasswordComponent } from '../edit-password/edit-password.component';
import { AuthService } from 'src/app/feature-modules/auth/auth.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.css'],
})
export class ProfileHomeComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  loggedinUser: User;
  loadingProfile: boolean;
  loadingPost: boolean;
  userSub: Subscription;
  postSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postsService: PostsService,
    private profileService: ProfileService,
    private authService: AuthService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.userSub = this.authService.user$.subscribe((user) => {
      this.loadingProfile = false;
      this.loggedinUser = user;
    });

    this.postSub = this.postsService.posts$.subscribe((posts) => {
      this.loadingPost = false;
      this.posts = posts;
    });

    // re-render after created new post
    this.route.queryParamMap.subscribe(() => {
      this.loadingPost = true;
      this.postsService.fetchMyPosts();
    });
  }

  onDeletePost(id: string) {
    this.postsService.deleteMyPost(id);
  }

  onChangeAvatar(event: Event) {
    this.loadingProfile = true;
    const avatar = (event.target as HTMLInputElement).files[0];

    this.profileService.updateMyAvatar(avatar).subscribe((avatarPath) => {
      this.authService.user$.next({
        ...this.loggedinUser,
        avatar: avatarPath,
      });
    });
  }

  onOpenDetailsModal() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '500px';

    dialogConfig.data = {
      name: this.loggedinUser.name,
    };

    const dialogRef = this.dialog.open(EditProfileComponent, dialogConfig);

    // receive the data after closing modal
    dialogRef
      .afterClosed()
      .pipe(
        filter((data) => !!data),
        tap(() => (this.loadingProfile = true)),
        switchMap((data) =>
          this.profileService.updateMyProfile({
            ...this.loggedinUser,
            name: data.name,
          })
        )
      )
      .subscribe((user) => {
        this.authService.user$.next(user);
        this.reloadPage();
      });
  }

  onOpenPasswordModal() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '500px';

    const dialogRef = this.dialog.open(EditPasswordComponent, dialogConfig);

    dialogRef
      .afterClosed()
      .pipe(
        filter((data) => !!data),
        tap(() => (this.loadingProfile = true)),
        switchMap((data) => this.profileService.updateMyPassword(data))
      )
      .subscribe(() => {
        this.loadingProfile = false;
      });
  }

  onClickLike({ postId }) {
    this.postsService.likePost(postId, this.loggedinUser._id);
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
    this.postSub.unsubscribe();
  }

  private reloadPage() {
    this.router.navigate(['./'], {
      relativeTo: this.route,
      queryParams: { ts: Date.now().toString() },
      skipLocationChange: true,
      queryParamsHandling: 'merge',
    });
  }
}
