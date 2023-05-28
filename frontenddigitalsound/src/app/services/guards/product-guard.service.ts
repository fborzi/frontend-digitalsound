import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
//import Swal from 'sweetalert2';
import { TokenService } from '../token.service';

@Injectable({
  providedIn: 'root'
})
export class ProductGuardService implements CanActivate{

  actualRole : string = "";

  constructor(private tokenService: TokenService,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {
    const expectedRole = route.data['expectedRole'];
    
    this.actualRole = this.tokenService.isAdmin() ? 'admin' : 'user';
    
    if(!this.tokenService.isLogged() || expectedRole.indexOf(this.actualRole) < 0){
      this.router.navigate(['/']);
      //TODO: add message to show error
      // Swal.fire({
      //   icon: 'error',
      //   title: 'Oops...',
      //   text: 'No tienes permisos para acceder a esta página',
      // });

      return false;
    }
    return true;
  }
}
