import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyAwesomeComponentComponent } from './my-awesome-component/my-awesome-component.component';
import { TimelineComponent } from './timeline/timeline.component';
import {TimeAgoPipe} from 'time-ago-pipe';
//import {TweetComponent} from './tweet/tweet.component';
@NgModule({
  declarations: [
    AppComponent,
    MyAwesomeComponentComponent,
    TimelineComponent,
     TimeAgoPipe,
     //TweetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
