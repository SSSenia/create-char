import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EndPageComponent } from './end-page/end-page.component';
import { StartPageComponent } from './start-page/start-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full'},
  { path: 'start', component: StartPageComponent },
  { path: 'end', component: EndPageComponent },
  { path: 'create', loadChildren: () => import('./creating-page/creating-page.module').then(m => m.CreatingPageModule) },
  { path: '**', redirectTo: '/start' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
