import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { User } from 'src/app/interfaces/auth.model';
import { Post } from 'src/app/interfaces/post.model';
import { LikesDialogComponent } from '../likes-dialog/likes-dialog.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  @Input() posts: Post[];
  @Input() loggedinUser: User;
  @Output() deleteClicked = new EventEmitter<string>();

  // TODO: type
  @Output() commentDeleted = new EventEmitter<{
    postId: string;
    commentId: string;
  }>();
  @Output() postLiked = new EventEmitter<{ postId: string }>();

  commentSection: string;

  constructor(private fb: FormBuilder, private dialog: MatDialog) {}

  ngOnInit(): void {
    console.log(this.posts);
  }

  renderLikes(post) {
    const alreadyLiked = post.likes.find(
      (like) => like.user === this.loggedinUser._id
    );

    if (alreadyLiked) {
      if (post.likes.length === 1) {
        return `You like this post`;
      }
      return `You and other ${post.likes.length - 1} people like this post`;
    } else {
      if (post.likes.length === 0) {
        return null;
      }
      return `${post.likes.length} people like this post`;
    }
  }

  renderLikeButton(likes, post) {
    return likes.find((like) => like.user === this.loggedinUser._id)
      ? 'favorite'
      : 'favorite_border';
  }

  renderCommentButton(comments) {
    if (comments.length > 0) {
      return `${comments.length} comments`;
    }

    if (comments.length <= 0) {
      return 'COMMENT';
    }
  }

  openLikesDialog(post) {
    console.log(post.likes);
    // const dialogConfig = new MatDialogConfig();

    // dialogConfig.data = {};

    // this.dialog.open(LikesDialogComponent, dialogConfig);
  }

  onLikeClick(postId: string) {
    this.postLiked.emit({ postId });
  }

  onCommentButtonClick(postId: string) {
    if (this.commentSection !== postId) {
      this.commentSection = postId;
    } else {
      this.commentSection = '';
    }
  }

  onDeleteClick(id: string) {
    this.deleteClicked.emit(id);
  }

  onDeleteComment(postId: string, commentId: string) {
    this.commentDeleted.emit({ postId, commentId });
  }
}
