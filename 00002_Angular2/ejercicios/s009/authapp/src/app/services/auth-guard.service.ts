import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterState, CanActivate } from '@angular/router';
import { Auth } from "./auth.service";

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor( private auth:Auth, private router:Router ) { 

  }

  canActivate( next:ActivatedRouteSnapshot, state:RouterState ){
    if (this.auth.authenticated()){
      console.log("El guard pasa...");
      return true;
    } else {
      console.error("Bloqueado....");
      this.router.navigate(['/home']);
      return false;
    }
  }

}
