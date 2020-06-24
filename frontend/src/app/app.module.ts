import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeedComponent } from './components/feed/feed.component';
import { LoginComponent } from './components/login/login.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

// MATERIAL DESING
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import { ProfileComponent } from './components/profile/profile.component';
import { PqrComponent } from './components/pqr/pqr.component';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { SettingsComponent } from './components/settings/settings.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input'; 
import {MatDatepickerModule} from '@angular/material/datepicker';

import { DislogExamplePostsComponent } from './components/dislog-example-posts/dislog-example-posts.component'; //BUTTON FILE
import { DislogExampleChatboxComponent } from './components/dislog-example-chatbox/dislog-example-chatbox.component';

import {MatDialogModule} from '@angular/material/dialog';
import { ListPrizeComponent } from './components/list-prize/list-prize.component';
import { PointsEarnedComponent } from './components/points-earned/points-earned.component';
import { PostsComponent } from './components/posts/posts.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatListModule} from '@angular/material/list'; 

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    LoginComponent,
    ToolbarComponent,
    ProfileComponent,
    SettingsComponent,
    PqrComponent,
    DislogExampleChatboxComponent,
    ListPrizeComponent,
    PointsEarnedComponent,
    PostsComponent,
    DislogExamplePostsComponent,
  ],
  entryComponents:
  [DislogExampleChatboxComponent,
  DislogExamplePostsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatDialogModule,
    MatBottomSheetModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
