import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { RegisterComponent } from './modules/user/components/register/register.component';
import { PageNotFoundComponent } from './core/component/page-not-found/page-not-found.component';
import { MessageBoxComponent } from './core/components/message-box/message-box.component';
import { SelectivePreloadingStrategyService } from './core/service/selective-preloading-strategy.service';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/posts',
    pathMatch: 'full'
  },
  {
    path: 'demo',
    loadChildren: () => import('./modules/demo/demo.module').then(module => module.DemoModule),
    data: {
      preload: true,
    }
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
  {
    path: 'message',
    component: MessageBoxComponent,
    outlet: 'popup',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: SelectivePreloadingStrategyService
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
