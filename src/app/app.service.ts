import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
 
export class User {
  constructor(
    public email: string,
    public password: string) { }
}
 

@Injectable()
export class AppService {

  users = [
    new User('admin@admin.com','adm9'),
    new User('user1@gmail.com','a23')
  ];
  

  constructor(private http:Http,private _router:Router) { }
  
    fetchGames(){
      return this.http.get('http://starlord.hackerearth.com/gamesarena');
    }

    logout() {
      localStorage.removeItem("user");
      this._router.navigate(['Login']);
    }
   
    login(user){
      console.log(user);
      var authenticatedUser = this.users.find(u => u.email === user.email);
      if (authenticatedUser && authenticatedUser.password === user.password){
        localStorage.setItem("user", authenticatedUser.email);
        this._router.navigate(['home']);      
        return true;
      }
      return false;
   
    }
   
     checkCredentials(){
      if (localStorage.getItem("user") === null){
           this._router.navigate(['Login']);
      }
    }
  
  
}
