import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostsComponent implements OnInit {
  posts: any[] = [];
  isLoading = true;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService
      .getPosts()
      .then((data) => {
        this.posts = data;
        this.isLoading = false;
      })
      .catch((error) => {
        this.isLoading = false;
      });
  }
}
