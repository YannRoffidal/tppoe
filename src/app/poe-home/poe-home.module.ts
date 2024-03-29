import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoeHomeComponent } from './poe-home.component';
import { PoeFormComponent } from './poe-form/poe-form.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    PoeHomeComponent,
    PoeFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class PoeModule { }
