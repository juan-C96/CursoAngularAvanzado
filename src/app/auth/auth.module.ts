import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//MODULES
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';

//COMPONENTS
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule { }
