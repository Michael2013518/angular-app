import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostModule } from './modules/post/post.module';
import { UserModule } from './modules/user/user.module';
import { HeaderComponent } from './core/component/header/header.component';
import { PageNotFoundComponent } from './core/component/page-not-found/page-not-found.component';
import { MessageBoxComponent } from './core/components/message-box/message-box.component';
import { HttpClientModule } from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    MessageBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PostModule,
    UserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
