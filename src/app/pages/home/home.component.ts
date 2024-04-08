import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IPost } from 'src/app/models/IPost';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  posts: IPost[] = [];

  constructor(private postService: PostService, private router: Router) {
    this.posts = this.postService.getPosts();
  }

  navigateToSinglePost(post: IPost) {
    this.router.navigate(['/post', post.id]);
  }


}
