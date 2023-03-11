import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MaterialComponent } from './components/material/material.component';
import { SchoolsComponent } from './components/schools/schools.component';

const routes: Routes = [{path:"login",component:LoginComponent},
                        {path:"home",component:HomeComponent},
                        {path:"material",component:MaterialComponent},
                        {path:"schools",component:SchoolsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
