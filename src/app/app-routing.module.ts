import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/layout/home/home.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { LoggedGuard } from './guards/logged.guard';
import { UserProfileComponent } from './components/layout/user-profile/user-profile.component';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoggedGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [LoggedGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'userProfile',
    component: UserProfileComponent,
    canActivate: [AuthGuardGuard]
  },{
    path: 'posts',
    component: PostsComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
