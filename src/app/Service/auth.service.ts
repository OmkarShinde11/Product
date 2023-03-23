import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  Status:boolean;
  constructor(private router:Router) { }

  login(){
     this.Status=true
     
  }
  logout(){
     this.Status=false
  }

  authentication(){
    if(this.Status){
      this.login()
    }
    else{
      this.router.navigate(['/'])
    }
    return this.Status
  }
}
