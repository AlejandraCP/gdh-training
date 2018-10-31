import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot , Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthAdminService } from './../../app/services/auth-admin.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private authAdminService: AuthAdminService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authAdminService.afAuth.authState
    .take(1)
    .map(authState => !! authState)
    .do(authenticated => {
      if (!authenticated) {
        this.router.navigate(['']);
      }
    });
  }
}
