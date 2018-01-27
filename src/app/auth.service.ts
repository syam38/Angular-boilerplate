import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';
import { AppService }  from './app.service';
@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private service:AppService){

  }
  canActivate() {
    return this.service.checkCredentials();    
  }

  canActivateChild() {
    console.log('checking child route access');
    return true;
  }

}