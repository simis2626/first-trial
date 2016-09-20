/**
 * Created by Andromeda on 2/09/2016.
 */

import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {AuthProvider} from "../services/auth.service";


@Component({
    selector: 'root-component',
    templateUrl: 'app/root/app.component.html'
})
export class AppComponent {
    authProvider: AuthProvider;

    constructor(authProvider: AuthProvider, private router: Router) {
        this.authProvider = authProvider;
    }

    logout() {
        this.authProvider.Logout();
        this.router.navigate(['./Login'])

    }

    isLoggedIn(): boolean {
        return this.authProvider.isLoggedIn

    }


}