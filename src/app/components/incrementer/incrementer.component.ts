import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styles: ``
})
export class IncrementerComponent {
  @Input('value') value: number = 0;
  @Input() btnClass: string = 'btn-primary';

  @Output('value') OutValue: EventEmitter<number> = new EventEmitter();

  changeValue( value: number ) {
    
    var limit = this.value + value;

    if(limit >= 100) {
      this.value = 100;
    } else if(limit <= 0) {
      this.value = 0;
    } else {
      this.value = this.value + value;
    }

    this.OutValue.emit( this.value );
  }

  onChange( newValue : number ) {

    if(newValue >= 100) {
      this.value = 100;
    } else if(newValue <= 0) {
      this.value = 0;
    } else {
      this.value = newValue;
    }
    
    this.OutValue.emit(this.value);
  }
}
