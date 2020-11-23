import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditPostComponent } from './edit-post/edit-post.component';
import { PostListHomeComponent } from './post-list-home/post-list-home.component';

const routes: Routes = [
  {
    path: '',
    component: PostListHomeComponent,
  },
  { path: ':id/edit', component: EditPostComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],
})
export class PostsRoutingModule {}
