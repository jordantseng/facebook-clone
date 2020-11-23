import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/auth.model';

import { PostsService } from '../posts.service';
import { AuthService } from 'src/app/feature-modules/auth/auth.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent implements OnInit {
  loggedInUser: User;
  initialFormValue = {
    title: '',
    content: '',
    image: '',
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postsService: PostsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.user$.subscribe((userProfile) => {
      this.loggedInUser = userProfile;
    });
  }

  onCreatePost(post) {
    this.postsService.createPost(post).subscribe(() => {
      this.router.navigate(['./'], {
        relativeTo: this.route,
        queryParams: {
          ts: Date.now().toString(),
        },
        queryParamsHandling: 'merge',
        skipLocationChange: true,
      });
    });
  }
}
