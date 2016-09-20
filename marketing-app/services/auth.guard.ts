import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {AuthProvider} from "./auth.service";
import {Injectable} from "@angular/core";
/**
 * Created by Andromeda on 3/09/2016.
 */


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authProvider: AuthProvider, private router: Router) {
    }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authProvider.isLoggedIn) {
            return true;
        } else {
            this.router.navigate(['/Login']);
            return false;
        }
    }


}