import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ConnectionMonitor } from './connection-monitor.service';
import {StatusService} from './status.service';
import {LoginComponent} from './login.component';
import {UserComponent} from './user/user.component';
import {ErrorComponent} from './error-component';
import {appRoutes} from './appRoutes';
import {RandomNumberComponent} from './random-number/random-number.component';
import { SearchMessagesComponent } from './search-messages/search-messages.component';
import {ConvStoreService} from './conversations/conversations.service';
import {ConversationsComponent} from './conversations/conversations.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    ErrorComponent,
    RandomNumberComponent,
    SearchMessagesComponent,
    ConversationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ConnectionMonitor,StatusService,ConvStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
