import { Route } from '@angular/router';
import { ContentComponent } from './content/content.component';

export const appRoutes: Route[] = [
  { path: 'overview', component: ContentComponent },
  { path: 'updates', component: ContentComponent },
  { path: 'payment', component: ContentComponent },
  { path: 'stocks', component: ContentComponent },
  { path: 'admin/settings', component: ContentComponent },
  { path: 'product/list', component: ContentComponent },
  { path: 'product/new', component: ContentComponent },
  { path: 'order/list', component: ContentComponent },
  { path: 'user/setup', component: ContentComponent },
  { path: 'user/manage', component: ContentComponent },
  { path: 'logout', component: ContentComponent },
  { path: '**', redirectTo: 'overview' },
];
