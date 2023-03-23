import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class deActivate{
  canDeactivate:()=>Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
}
export class DeActivateGuard implements CanDeactivate<deActivate> {
  canDeactivate(
    component: deActivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canDeactivate()
  }
  
}
