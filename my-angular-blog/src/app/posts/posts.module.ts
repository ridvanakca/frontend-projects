import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';



@NgModule({
  declarations: [
    PostDetailComponent, 
    PostListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PostsModule { }
