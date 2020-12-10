import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-likes-dialog',
  templateUrl: './likes-dialog.component.html',
  styleUrls: ['./likes-dialog.component.css'],
})
export class LikesDialogComponent implements OnInit {
  postId: string;
  loading: boolean;
  users: { _id: string; name: string; avatar: string }[];

  constructor(
    private dialogRef: MatDialogRef<LikesDialogComponent>,
    private postsService: PostsService,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.postId = data.postId;
  }

  ngOnInit(): void {
    this.loading = true;
    this.postsService.getLikes(this.postId).subscribe((users) => {
      this.loading = false;
      this.users = users;
    });
  }
}
