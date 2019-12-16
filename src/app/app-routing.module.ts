import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './modules/user/components/register/register.component';
import { PageNotFoundComponent } from './core/component/page-not-found/page-not-found.component';


const routes: Routes = [
  {path: '', redirectTo: '/posts', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
