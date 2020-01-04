import { Component, OnInit } from '@angular/core';
import { Post } from './models/post.model';
import { PostService } from '../posts/services/post.service';
import { ActivatedRoute } from '@angular/router';

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
    entities$.subscribe((data: Post[]) => {
      this.entities = data;
    });
  }

  removeItem( item: Post ) {
    console.log('removing...' + item.id + ' ' + item.title + ' ');
    this.entities = this.entities.filter((entity) => entity.id !== item.id);
  }
}
