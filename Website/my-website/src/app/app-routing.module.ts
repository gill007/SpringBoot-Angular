import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LoginFormComponent } from './login-form/login-form.component';


const routes: Routes = [
  {
    path:'',
    component: LoginFormComponent
  },
  {
    path:'mainpage',
    component:MainpageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
