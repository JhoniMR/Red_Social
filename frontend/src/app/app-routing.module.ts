import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { FeedComponent } from './components/feed/feed.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PqrComponent } from './components/pqr/pqr.component';
import { ListPrizeComponent } from './components/list-prize/list-prize.component';
import { PointsEarnedComponent } from './components/points-earned/points-earned.component';
import { PostsComponent } from './components/posts/posts.component';


const routes: Routes = [

//  {path: '', redirectTo: 'feed', pathMatch: 'full'}, 
  {path: 'profile', component: ProfileComponent},
  {path: 'settings' , component: SettingsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'feed', component: FeedComponent},
  {path: 'pqr', component: PqrComponent},
  {path: 'list-prize', component: ListPrizeComponent},
  {path: 'points-earned', component: PointsEarnedComponent},
  {path: 'posts', component: PostsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
