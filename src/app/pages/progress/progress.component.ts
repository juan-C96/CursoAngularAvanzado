import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [ './progress.component.css' ]
})
export class ProgressComponent {
  bar_percent1: number = 10;
  bar_percent2: number = 50;

  get getProgress1() {
    return `${ this.bar_percent1 }%`;
  }

  get getProgress2() {
    return `${ this.bar_percent2 }%`;
  }
}
