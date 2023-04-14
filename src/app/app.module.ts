import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialmoduleModule } from './modules/materialmodule/materialmodule.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialComponent } from './components/material/material.component';
import { SchoolsComponent } from './components/schools/schools.component';
import { ServicesComponent } from './components/services/services.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MaterialComponent,
    SchoolsComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AgGridModule,
    MaterialmoduleModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
