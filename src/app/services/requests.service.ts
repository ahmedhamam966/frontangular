import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RequestsService {
readonly URL;
  constructor(private http:HttpClient) {
    this.URL='http://localhost:3000';
   }
   gettask(url:string)
   {
     return this.http.get(`${this.URL}/${url}`)
   }
   posttask(url:string,paybal:object)
   {
    return this.http.post(`${this.URL}/${url}`,paybal)
   }
   patchtask(url:string,paybal:object)
   {
    return this.http.patch(`${this.URL}/${url}`,paybal)
   }
   deletetask(url:string)
   {
    return this.http.delete(`${this.URL}/${url}`)
   }
   login(email:string,password:string)
   {
     return this.http.post(`${this.URL}/users/login`,{
       email,password
      },
      {
        observe:'response'
      });
    }


    signup(email: string, password: string) {
      return this.http.post(`${this.URL}/users`, {
        email,
        password
      }, {
          observe: 'response'
        });
    }
    }
   
  
  