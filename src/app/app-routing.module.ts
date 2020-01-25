import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MytaskComponent}from './view/mytask/mytask.component';
import{SignupComponent}from 'src/app/view/signup/signup.component'
import{NewlistComponent}from './view/newlist/newlist.component';
import{NewtaskComponent}from 'src/app/view/newtask/newtask.component'
import{LoginpageComponent}from 'src/app/view/loginpage/loginpage.component'
import { from } from 'rxjs';

const routes: Routes = [
  {path:'',redirectTo:'lists',pathMatch:'full'},
  {path:'newlist',component:NewlistComponent},
  
  {path:'lists',component:MytaskComponent},
  {path:'lists/:listid',component:MytaskComponent},
  {path:'lists/:listid/newtask',component:NewtaskComponent},
  {path:'login',component:LoginpageComponent},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
