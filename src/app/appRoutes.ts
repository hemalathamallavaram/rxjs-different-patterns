import { Routes } from '@angular/router';
import {RandomNumberComponent} from './random-number/random-number.component';
import {SearchMessagesComponent} from './search-messages/search-messages.component';
import { ErrorComponent } from './error-component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login.component';

export const appRoutes: Routes = [
  { path: 'random-numbers', component: RandomNumberComponent },
  { path: 'search-messages',      component: SearchMessagesComponent },
  { path: 'user',      component: UserComponent },
  { path: 'login',      component: LoginComponent },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '**', component: ErrorComponent }
];
