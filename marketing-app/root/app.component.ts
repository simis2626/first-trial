/**
 * Created by Andromeda on 2/09/2016.
 */

import {Component} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthService} from '../auth0/auth.service';



@Component({
    selector: 'root-component',
    templateUrl: 'app/root/app.component.html'

})
export class AppComponent {
    constructor(private authProvider: AuthService) {
    }

}