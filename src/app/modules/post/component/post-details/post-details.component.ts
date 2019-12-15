import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../models/post.model';
import { posts } from '../../posts';
import { PostService } from '../../../posts/services/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  entity: Post;
  // ActivatedRoute 包括路由参数相关信息
  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    console.log(this.route);
    this.route.paramMap.subscribe(params => {
      const postId = +params.get('id');
      console.log(postId);
      this.entity = this.postService.show(postId);
    });
  }

}
