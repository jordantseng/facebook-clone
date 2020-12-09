import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/interfaces/auth.model';
import { Comment, Post } from 'src/app/interfaces/post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-comments-section',
  templateUrl: './comments-section.component.html',
  styleUrls: ['./comments-section.component.css'],
})
export class CommentsSectionComponent implements OnInit {
  @Input() comments: Comment[];
  @Input() post: Post;
  @Input() loggedinUser: User;

  form: FormGroup;

  constructor(private fb: FormBuilder, private postsService: PostsService) {}

  ngOnInit(): void {
    this.form = this.fb.group({ comment: [''] });
  }

  onDeleteComment(commentId: string) {
    this.postsService.deleteComment(this.post._id, commentId);
  }

  onSubmitComment() {
    this.postsService.createComment(
      this.form.value,
      this.post._id,
      this.loggedinUser
    );

    this.form.get('comment').setValue('');
  }
}
