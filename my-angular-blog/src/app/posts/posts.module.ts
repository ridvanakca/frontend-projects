import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes= [
  { path: 'blog', component: PostListComponent },
  { path: 'blog/:id', component: PostDetailComponent}
]

@NgModule({
  declarations: [
    PostDetailComponent, 
    PostListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PostsModule { }
