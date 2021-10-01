import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';

import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from './main-layout.component';
import { Searching2DChartComponent } from './searching-2D-chart/searching-2D-chart.component';
import { SearchingSelectorComponent } from './searching-selector/searching-selector.component';


@NgModule({
  declarations: [
    MainLayoutComponent,
    Searching2DChartComponent,
    SearchingSelectorComponent
  ],
  imports: [
    CommonModule,
    MainLayoutRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class MainLayoutModule { }
