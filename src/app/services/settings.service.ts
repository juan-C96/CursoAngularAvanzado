import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  
  private linkTheme = document.querySelector('#theme');

  constructor() { 
    this.initTheme();
  }

  initTheme() {
    const url = (localStorage.getItem('theme')) ? `${ localStorage.getItem('theme') }` : `./assets/css/colors/default.css`;
    this.linkTheme.setAttribute('href', url);
  }

  
  changeTheme( theme: string ) {
    this.linkTheme.setAttribute('href', `./assets/css/colors/${theme}.css`);
    localStorage.setItem('theme', `./assets/css/colors/${theme}.css`);
    this.checkCurrentTheme();
  }
  
  checkCurrentTheme() {
    const links = document.querySelectorAll('.selector');
  
    const currentTheme = this.linkTheme.getAttribute('href');
    
    links.forEach(element => {
      const btnThemeUrl = `./assets/css/colors/${element.getAttribute('data-theme')}.css`;
      element.classList.toggle('working', btnThemeUrl === currentTheme);
    });
  }
}
