import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, take, map, filter, retry, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: ``
})
export class RxjsComponent implements OnDestroy {

  intervalSubs: Subscription;

  constructor() {
    /* this.returnOnservable().pipe(
      retry(2)
    ).subscribe(
      valor => console.log("Subs: ", valor),
      error => console.warn("Error: ", error),
      () => console.info('Obs finish')
    ) */
    this.intervalSubs = this.returnInterval().subscribe( console.log )
  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  returnInterval(): Observable<number> {
    return interval(100)
                  .pipe(
                    take(10), 
                    map( valor => valor + 1 ),
                    filter( valor => valor % 2 === 0 )
                  );
  }

  returnOnservable(): Observable<number> {
    let i = -1;

    return new Observable<number>( observer => {
      const interval = setInterval(()=>{
        i++
        observer.next(i)

        if(i === 4) {
          clearInterval( interval );
          observer.complete();
        }

        if(i === 2) {
          observer.error("i llegó al valor de 2")
        }

      }, 1000)
    });
  }

}
