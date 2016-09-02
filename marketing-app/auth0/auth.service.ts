/**
 * Created by Andromeda on 2/09/2016.
 */
import {Injectable}      from '@angular/core';
import {tokenNotExpired} from 'angular2-jwt';
import {Auth0Lock} from 'auth0-lock';


// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class AuthService {
    // Configure Auth0
    lock = new Auth0Lock('KWlrlVL0l3y9aOh7NkHfzXgsknctdg2E', 'simis2626.au.auth0.com', {});

    constructor() {
        // Add callback for lock `authenticated` event
        this.lock.on("authenticated", (authResult) => {
            localStorage.setItem('id_token', authResult.idToken);
        });
    }

    public login() {
        // Call the show method to display the widget.
        this.lock.show();
    };

    public authenticated() {
        // Check if there's an unexpired JWT
        // This searches for an item in localStorage with key == 'id_token'
        return tokenNotExpired();
    };

    public logout() {
        // Remove token from localStorage
        localStorage.removeItem('id_token');
    };
}