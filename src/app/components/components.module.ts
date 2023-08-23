import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { NavbarComponent } from './navbar/navbar.component';
import { HorizontalBarGraphComponent } from './horizontal-bar-graph/horizontal-bar-graph.component';



@NgModule({
  declarations: [
    NavbarComponent,
    HorizontalBarGraphComponent
  ],
  exports: [
    NavbarComponent,
    HorizontalBarGraphComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ]
})
export class ComponentsModule { }
