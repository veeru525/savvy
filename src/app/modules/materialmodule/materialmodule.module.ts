import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule,matFormFieldAnimations} from '@angular/material/form-field';
import { AgGridModule } from 'ag-grid-angular';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    AgGridModule,
    MatTableModule,
    MatMenuModule,
    MatGridListModule,
    MatButtonModule,
    MatDialogModule,
    MatSidenavModule,
    MatCardModule,
  ],
  exports:[MatIconModule,
    MatToolbarModule,MatTabsModule,MatCheckboxModule,MatTableModule,MatFormFieldModule,
    MatMenuModule,AgGridModule,MatGridListModule,MatButtonModule,MatDialogModule,MatSidenavModule,
    MatCardModule,]
  
})
export class MaterialmoduleModule { }
