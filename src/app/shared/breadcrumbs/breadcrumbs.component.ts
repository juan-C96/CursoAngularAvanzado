import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: ``
})
export class BreadcrumbsComponent implements OnDestroy {

  title: string = "";
  tituloSubs$: Subscription;

  constructor( private router: Router ) { 
    this.tituloSubs$ = this.getDataRoute().subscribe( ({ title }) => {
      this.title = title;
      document.title = `AdminPro - ${ title }`;
    })
   }

  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }

  getDataRoute() {
    return this.router.events
      .pipe(
        filter( event => event instanceof ActivationEnd ),
        filter( (event: ActivationEnd) => event.snapshot.firstChild === null ),
        map((event: ActivationEnd) => event.snapshot.data)
      )
  }
}
