import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: ``
})
export class Grafica1Component {

  public doughnutChartData_g1: ChartData<'doughnut'> = {
    labels: ['Download Sales', 'In-Store Sales','Mail-Order Sales'],
    datasets: [
      { data: [350, 450, 100] },
    ],
  };

  
  public doughnutChartData_g2: ChartData<'doughnut'> = {
    labels: ['Part 1', 'Part2','Part3'],
    datasets: [
      { data: [10, 86.3, 41.5] },
    ],
  };

  
  public doughnutChartData_g3: ChartData<'doughnut'> = {
    labels: ['Videogames', 'Movies','Books', 'Out'],
    datasets: [
      { data: [75, 25, 10, 45] },
    ],
  };

  
  public doughnutChartData_g4: ChartData<'doughnut'> = {
    labels: ['Breakfast', 'Lunch','Dinner'],
    datasets: [
      { data: [25, 75, 10] },
    ],
  };
}
