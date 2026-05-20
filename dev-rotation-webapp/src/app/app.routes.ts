import { Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {DetailsPageComponent} from './details-page/details-page.component';
import {HomePageComponent} from './home-page/home-page.component';

export const routes: Routes = [
  { path: 'details', component: DetailsPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
