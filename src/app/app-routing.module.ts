import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './modules/user/components/register/register.component';
import { PageNotFoundComponent } from './core/component/page-not-found/page-not-found.component';
import { MessageBoxComponent } from './core/components/message-box/message-box.component';


const routes: Routes = [
  {path: '', redirectTo: '/posts', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent },
  {
    path: 'message',
    component: MessageBoxComponent,
    outlet: 'popup',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
