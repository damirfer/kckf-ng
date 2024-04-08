import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from 'src/app/models/IPost';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
  id: string = '';
  post: IPost = {} as IPost;
  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });    
  }

  loadPost() {
    this.post = this.postService.getSinglePost(parseInt(this.id));
  }
}
