import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FusionChartsModule } from 'angular-fusioncharts';

// Load FusionCharts
import * as FusionCharts from 'fusioncharts';
// Load Charts module
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as Widgets from 'fusioncharts/fusioncharts.widgets';
import * as PowerCharts from 'fusioncharts/fusioncharts.powercharts';

// Load fusion theme
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Add dependencies to FusionChartsModule
FusionChartsModule.fcRoot(FusionCharts, Charts, Widgets, PowerCharts, FusionTheme);

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FusionChartsModule
  ],
  exports: [
    FusionChartsModule
  ]
})
export class FusionchartsModule { }
