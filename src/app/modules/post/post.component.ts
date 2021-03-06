import { Component, OnInit } from '@angular/core';
import { Post } from './models/post.model';
import { PostService } from '../posts/services/post.service';
import { ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  title = 'Posts title';
  entities: Post[];
  selectId: number;
  constructor(private postService: PostService, private route: ActivatedRoute) {
    // this.entities = this.postService.index() ;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.selectId = +params.get('id');
    });

    const entities$ = this.postService.index();
    const observer = {
      next: (data: Post[]) => {
        this.entities = data;
      },
      error: (error: HttpErrorResponse) => console.log(error)
    };
    entities$.subscribe(observer);
  }

  removeItem( item: Post ) {
    console.log('removing...' + item.id + ' ' + item.title + ' ');
    this.entities = this.entities.filter((entity) => entity.id !== item.id);
  }
}
