import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";

//COMPONENTS
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    { 
      path: 'auth', 
      component: LoginComponent,
      children: [
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
      ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})

export class authRoutingModule {}