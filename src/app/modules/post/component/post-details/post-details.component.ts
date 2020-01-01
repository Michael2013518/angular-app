import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private route: ActivatedRoute, private postService: PostService, private router: Router) { }

  ngOnInit() {
    // console.log(this.route);
    // this.route.paramMap.subscribe(params => {
    //   const postId = +params.get('id');
    //   console.log(postId);
    //   this.entity = this.postService.show(postId);
    // });
    this.route.data.subscribe((data: { entity: Post}) => {
      this.entity = data.entity;
    });
  }
  gotoPosts(entity: Post) {
    console.log('back');
    this.router.navigate(['/posts', { id: entity.id }]);
  }

}
