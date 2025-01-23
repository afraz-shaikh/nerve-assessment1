import { Route, RouterModule, Routes } from '@angular/router';
import { path } from './routing/path';
import { NgModule } from '@angular/core';

export const routes: Route[] = [
    {
        path: path.home,
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule],
  })
  export class AppRoutingModule { }