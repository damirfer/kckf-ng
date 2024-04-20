import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IPost } from 'src/app/models/IPost';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  posts: IPost[] = [];

  constructor(
    private postService: PostService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.posts = this.postService.getPosts();
    this.toastr.info('All posts loaded!', 'Info');
  }

  navigateToSinglePost(post: IPost) {
    this.router.navigate(['/post', post.id]);
  }
}
