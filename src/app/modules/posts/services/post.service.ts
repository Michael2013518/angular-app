import { Injectable } from '@angular/core';
import { Post } from '../../post/models/post.model';
import { posts } from '../../post/posts';

/**
 * providedIn: 'root' 可以在应用的任何地方使用
 */
@Injectable({
  providedIn: 'root'
})
export class PostService {
  entities: Post[];
  constructor() {
    this.entities = posts;
  }
  index() {
    return this.entities;
  }
  show(id: number) {
    return this.entities.find(item => item.id === id);
  }
}
