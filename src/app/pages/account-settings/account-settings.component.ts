import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: ``
})
export class AccountSettingsComponent implements OnInit {
  
  public linkTheme = document.querySelector('#theme');
  public links: NodeListOf<Element>;

  constructor() {}
  
  ngOnInit(): void {
    this.links = document.querySelectorAll('.selector');
    this.checkCurrentTheme();
  }

  changeTheme( theme: string ) {
    this.linkTheme.setAttribute('href', `./assets/css/colors/${theme}.css`);
    localStorage.setItem('theme', `./assets/css/colors/${theme}.css`);
    this.checkCurrentTheme();
  }

  checkCurrentTheme() {
    const currentTheme = this.linkTheme.getAttribute('href');
    
    this.links.forEach(element => {
      const btnThemeUrl = `./assets/css/colors/${element.getAttribute('data-theme')}.css`;
      element.classList.toggle('working', btnThemeUrl === currentTheme);
    });
  }
}
