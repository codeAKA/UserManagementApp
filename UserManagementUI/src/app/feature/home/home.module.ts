import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeService } from './home.service';
import { HomeComponent } from './home.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
    redirectTo: 'home'
  },
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    // material
    MatTableModule,
    MatButtonModule
  ],
  providers: [
    HomeService
  ],
  exports: [
    RouterModule,
    HomeComponent
  ]
})
export class HomeModule { }
