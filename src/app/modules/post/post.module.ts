import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { PostItemComponent } from './component/post-item/post-item.component';
import { PostDetailsComponent } from './component/post-details/post-details.component';
import { PostRoutingModule } from './post-routing.module';
import { PostEditComponent } from './components/post-edit/post-edit.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PostComponent, PostItemComponent, PostDetailsComponent, PostEditComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    PostComponent
  ]
})
export class PostModule { }
