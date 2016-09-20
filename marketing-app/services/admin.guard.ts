import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {ConsultantProvider} from "./consultant.service";
/**
 * Created by Andromeda on 3/09/2016.
 */


@Injectable()
export class AdminGuard implements CanActivate {

    constructor(private consultantProvider: ConsultantProvider, private router: Router) {
    }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.consultantProvider.selectedConsultant.admin) {
            return true;
        } else {
            this.router.navigate(['/']);
            return false;
        }
    }


}