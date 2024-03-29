import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { InternFormComponent } from './intern-form/intern-form.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HomeComponent,
    InternFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class HomeModule { }
