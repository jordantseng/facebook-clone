import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/interfaces/auth.model';
import { Post } from 'src/app/interfaces/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  @Input() posts: Post[];
  @Input() loggedinUser: User;
  @Output() deleteClicked = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onDeleteClick(id: string) {
    this.deleteClicked.emit(id);
  }
}
