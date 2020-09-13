import { ServerErrorRoutingModule } from './server-error/server-error-routing.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [

    // { path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) },
    // { path: 'signup', loadChildren: () => import('./components/signup/signup.module').then(m => m.SignupModule) },
    // { path: 'access-denied',
            // loadChildren: () => import('./components/access-denied/access-denied.module').then(m => m.AccessDeniedModule) },
    // { path: 'not-found', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule) },
    { path: '', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) },
    { path: 'error', loadChildren: () => import('./server-error/server-error.module').then(m => m.ServerErrorModule) },
    { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
