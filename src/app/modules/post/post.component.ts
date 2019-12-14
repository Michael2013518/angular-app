import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  title = 'Posts title';
  entities = [
    { title: 'Joy', body: 'lorem site here' },
    { title: 'Lee', body: 'lee here right' },
    { title: 'Luch' }
  ];
  constructor() { }

  ngOnInit() {
  }

  removeItem( val ) {
    console.log('removing...' + val);
    this.entities = this.entities.filter((item, index) => index !== val);
  }
}
