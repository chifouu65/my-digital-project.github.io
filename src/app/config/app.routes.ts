import { Routes } from '@angular/router';
import {ViewHomeComponent} from "../views/view-home/view-home.component";
import {ViewErrorComponent} from "../views/view-error/view-error.component";
import {ViewAboutComponent} from "../views/view-about/view-about.component";
import {ViewExpeditionComponent} from "../views/view-expedition/view-expedition.component";
import {ViewAssociationsComponent} from "../views/view-associations/view-associations.component";
import {ViewNewsComponent} from "../views/view-news/view-news.component";
import {ViewSponsorsComponent} from "../views/view-sponsors/view-sponsors.component";

export const routes: Routes = [
  { path: 'home', component: ViewHomeComponent },
  { path: 'about', component: ViewAboutComponent },
  { path: 'expeditions', component: ViewExpeditionComponent },
  { path: 'news', component: ViewNewsComponent },
  { path: 'sponsors', component: ViewSponsorsComponent },
  { path: 'associations', component: ViewAssociationsComponent },

  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: ViewErrorComponent },  // Wildcard route for a 404 page
];
