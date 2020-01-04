import { Injectable } from '@angular/core';
import { Post } from '../../post/models/post.model';
import { HttpClient } from '@angular/common/http';

/**
 * providedIn: 'root' 可以在应用的任何地方使用
 */
@Injectable({
  providedIn: 'root'
})
export class PostService {
  // json api
  POST_API = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {
  }
  index() {
    return this.http.get(this.POST_API);
  }
  show(id: number) {
    // return this.entities.find(item => item.id === id);
    return this.http.get<Post>(`${ this.POST_API }/${ id }`);
  }
}
