import { Injectable } from '@angular/core';
import { Post } from '../../post/models/post.model';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, retry, retryWhen, delay, take } from 'rxjs/operators';

/**
 * providedIn: 'root' 可以在应用的任何地方使用
 */
@Injectable({
  providedIn: 'root'
})
export class PostService {
  // json api
  POST_API = 'http://localhost:3000/posts';
  MYLIST_API = 'http://localhost:3000/my-list';

  constructor(private http: HttpClient) {
  }
  index() {
    // 使用pipe
    return this.http.get(this.POST_API).pipe(
      catchError(this.handleError),
      // retry(3),
      retryWhen(errors =>
        errors.pipe(
          delay(3000),
          take(3),
        ))
      );
  }
  show(id: number) {
    // return this.entities.find(item => item.id === id);
    return this.http.get<Post>(`${ this.POST_API }/${ id }`);
  }
  handleError() {
    return throwError('Something went wrong!');
  }
  addToList(entity: Post) {
    return this.http.post<Post>(this.MYLIST_API, entity);
  }
  getMyList() {
    return this.http.get<Post[]>(this.MYLIST_API);
  }
  removeItemFromList(entityId: number) {
    return this.http.delete(`${ this.MYLIST_API }/${ entityId }`);
  }
  update(id: number, entity: Post) {
    return this.http.put<Post>(`${ this.POST_API }/${ id }`, entity);
  }
}
