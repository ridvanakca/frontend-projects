import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: Post[];
  
  constructor(private postsService: PostService) { }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(data => this.posts = data);
  }
  
}
