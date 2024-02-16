import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: ``
})
export class PromesasComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {

    this.getUsers().then( users => {
      console.log(users)
    })
    
    /* const promesa = new Promise( (resolve, reject) => {
      if(false) {
        resolve("Hola Mundo!")
      } else {
        reject("Algo salio mal")
      }
    })

    promesa.then( (message) => {
      console.log("message",message)
    })
    .catch( error => console.log("Promise Error: " + error)) */
    
  }

  getUsers() {
    return new Promise( resolve => {
      fetch('https://reqres.in/api/users?page=2')
        .then( resp => resp.json() )
        .then( body => resolve( body.data ) )
    });
  }

}
