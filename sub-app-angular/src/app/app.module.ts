import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';

import { AppComponent } from './app.component';
import { PieChartComponent } from './pieChart/pie-chart.component';

@NgModule({
  declarations: [AppComponent, PieChartComponent],
  imports: [BrowserModule, NgxEchartsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
