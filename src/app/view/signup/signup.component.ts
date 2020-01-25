import { Component, OnInit } from '@angular/core';
import{AuthService}from 'src/app/services/auth.service'
import { HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private AuthService:AuthService) { }

  ngOnInit() {
  }
  signupbutton(email:string,password:string)
  {
    this.AuthService.signup(email, password).subscribe((res: HttpResponse<any>) => {
      
      console.log(res);
      
    });
  }
}
