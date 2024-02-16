import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: ``
})
export class PagesComponent implements OnInit {

  
  private linkTheme = document.querySelector('#theme');


  ngOnInit(): void {
    this.changeTheme();
  }

  private changeTheme() {
    const url = (localStorage.getItem('theme')) ? `${ localStorage.getItem('theme') }` : `./assets/css/colors/default.css`;
    this.linkTheme.setAttribute('href', url);
  }
}
