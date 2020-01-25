import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import{TaskService}from 'src/app/services/task.service';
import{RequestsService}from 'src/app/services/requests.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MytaskComponent } from './view/mytask/mytask.component';
import { from } from 'rxjs';
import { NewlistComponent } from './view/newlist/newlist.component';
import { NewtaskComponent } from './view/newtask/newtask.component';
import { LoginpageComponent } from './view/loginpage/loginpage.component';
import { SignupComponent } from './view/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    MytaskComponent,
    NewlistComponent,
    NewtaskComponent,
    LoginpageComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TaskService,RequestsService,
    { 
      provide: HTTP_INTERCEPTORS,
      useClass: RequestsService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
