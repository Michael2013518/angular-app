import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post.component';
import { PostDetailsComponent } from './component/post-details/post-details.component';
import { PostDetailResolveService } from './service/post-detail-resolve.service';
import { PostEditComponent } from './components/post-edit/post-edit.component';

const routes: Routes = [
  {path: 'posts', component: PostComponent},
  {path: 'posts/:id',
  resolve: {
    entity: PostDetailResolveService
  },
  component: PostDetailsComponent
},
{
  path: 'posts/:id/edit',
  component: PostEditComponent
}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PostRoutingModule { }
