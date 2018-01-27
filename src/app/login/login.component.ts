import { Component, OnInit } from '@angular/core';
import {AppService,User} from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email:any;
  password:any;
  public errorMsg = '';
  constructor(private authservice:AppService){
  }
 login() {
        console.log(this.email);
        if(!this.authservice.login({email:this.email,password:this.password})){

            this.errorMsg = 'Failed to login';
        }
    }
}
