import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [{
  path: '',
  redirectTo: '/books',
  pathMatch: 'full'
}, {
  path: 'books',
  loadChildren: './book/book.module#BookModule'
}];

export const routing = RouterModule.forRoot(routes);
