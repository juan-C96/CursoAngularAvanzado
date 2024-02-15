import { Component, Input } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: ``
})
export class DonaComponent {
  @Input('title') title: string = '';
  @Input('data') data: ChartData<'doughnut'> = {
    labels: ['default'],
    datasets: [
      { data: [0] },
    ],
  };
}
