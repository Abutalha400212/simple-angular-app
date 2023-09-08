import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css'],
})
export class SinglePostComponent {
  post: any = {};
  isLoading = true;
  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    const id: number = +this.route.snapshot.params['id'];
    this.postService
      .getPostById(id)
      .then((data) => {
        this.post = data;
        this.isLoading = false;
      })
      .catch((error) => {
        this.isLoading = false;
      });
  }
}
