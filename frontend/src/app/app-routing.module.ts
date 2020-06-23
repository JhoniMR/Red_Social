import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { CheckInComponent } from './components/check-in/check-in.component';
import { FeedComponent } from './components/feed/feed.component';


const routes: Routes = [

//  {path: '', redirectTo: 'feed', pathMatch: 'full'}, 
  {path: 'profile', component: ProfileComponent},
  {path: 'login', component: LoginComponent},
  {path: 'check-in', component: CheckInComponent},
  {path: 'feed', component: FeedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
