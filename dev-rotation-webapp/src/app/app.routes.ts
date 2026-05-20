import { Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {DetailsPageComponent} from './details-page/details-page.component';
import {HomePageComponent} from './home-page/home-page.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {UniversityComponent} from './university/university.component';

export const routes: Routes = [
  { path: 'details', component: DetailsPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'university', component: UniversityComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
