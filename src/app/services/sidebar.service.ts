import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      title: 'Dashboard',
      thumbnail: 'fa-solid fa-gauge',
      submenu: [
        { title: 'Main', url: '/'},
        { title: 'ProgressBar', url: 'progress'},
        { title: 'Graphiques', url: 'grafica1'},
        { title: 'Promesas', url: 'promesas'},
        { title: 'RXJS', url: 'rxjs'},
      ]
    }
  ]

  constructor() { }
}
