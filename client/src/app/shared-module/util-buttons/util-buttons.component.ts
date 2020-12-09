import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post.model';

@Component({
  selector: 'app-util-buttons',
  templateUrl: './util-buttons.component.html',
  styleUrls: ['./util-buttons.component.css'],
})
export class UtilButtonsComponent implements OnInit {
  @Input() post: Post;

  constructor() {}

  ngOnInit(): void {}
}
