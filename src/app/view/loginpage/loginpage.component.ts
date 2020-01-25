import { Component, OnInit } from '@angular/core';
import{AuthService}from 'src/app/services/auth.service';
import { from } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import{Router}from '@angular/router'
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(private AuthService:AuthService,private router: Router) { }

  ngOnInit() {
  }
  loginbutton(email:string,password:string)
  {
    this.AuthService.login(email, password).subscribe((res: HttpResponse<any>) => {
     
      console.log(res);
      
    });
  }
}
