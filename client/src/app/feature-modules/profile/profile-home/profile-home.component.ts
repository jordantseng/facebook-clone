import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { User } from 'src/app/interfaces/auth.model';
import { Post } from 'src/app/interfaces/post.model';

import { PostsService } from '../../posts/posts.service';
import { ProfileService } from '../profile.service';

import { EditProfileComponent } from '../edit-profile/edit-profile.component';
import { EditPasswordComponent } from '../edit-password/edit-password.component';
import { AuthService } from 'src/app/feature-modules/auth/auth.service';

@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.css'],
})
export class ProfileHomeComponent implements OnInit, OnDestroy {
  posts: Post[] = [];

  loggedinUser: User;
  loading: boolean;
  userSub: Subscription;
  postSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private profileService: ProfileService,
    private authService: AuthService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.userSub = this.authService.user$.subscribe((user) => {
      this.loggedinUser = user;
    });

    this.postSub = this.postsService.posts$.subscribe((posts) => {
      this.loading = false;
      this.posts = posts;
    });

    this.route.paramMap.subscribe(() => {
      this.loading = true;
      this.postsService.fetchMyPosts();
    });
  }

  onDeletePost(id: string) {
    this.loading = true;
    this.postsService.deleteMyPost(id);
  }

  onChangeAvatar(event: Event) {
    this.loading = true;
    const avatar = (event.target as HTMLInputElement).files[0];

    this.profileService.updateMyAvatar(avatar);
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

    dialogRef
      .afterClosed()
      .pipe(filter((data) => data))
      .subscribe((data) => {
        this.loading = true;
        this.profileService.updateMyProfile({
          ...this.loggedinUser,
          name: data.name,
        });
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
      .pipe(filter((data) => data))
      .subscribe((data) => {
        this.loading = true;
        this.profileService.updateMyPassword(data);
      });
  }

  onClickLike({ postId }) {
    this.postsService.likePost(postId, this.loggedinUser._id);
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
    this.userSub.unsubscribe();
  }
}
