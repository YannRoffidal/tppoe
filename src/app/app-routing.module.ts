import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InternFormComponent } from './home/intern-form/intern-form.component';
import { PoeHomeComponent } from './poe-home/poe-home.component';
import { PoeFormComponent } from './poe-home/poe-form/poe-form.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'poe',
    component: PoeHomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'add-poe',
    component: PoeFormComponent,
    pathMatch: 'full'
  },
  {
    path: 'intern-add',
    component: InternFormComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
