import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/interfaces/auth.model';
import { Post } from 'src/app/interfaces/post.model';
import { FormBuilder, FormGroup } from '@angular/forms';

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
  @Output() commentSubmitted = new EventEmitter<{
    commentValue: string;
    postId: string;
  }>();
  @Output() commentDeleted = new EventEmitter<{
    postId: string;
    commentId: string;
  }>();
  @Output() postLiked = new EventEmitter<{ postId: string }>();

  commentSection: string;
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({ comment: [''] });
  }

  renderLikeButton(likes) {
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

  onSubmitComment(postId: string) {
    this.commentSubmitted.emit({
      commentValue: this.form.value.comment,
      postId,
    });

    this.form.get('comment').setValue('');
  }

  onDeleteComment(postId: string, commentId: string) {
    this.commentDeleted.emit({ postId, commentId });
  }
}
