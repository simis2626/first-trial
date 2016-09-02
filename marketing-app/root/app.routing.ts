/**
 * Created by Andromeda on 2/09/2016.
 */
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from '../login/login.component';
import {AuthedAppComponent} from '../app-authed/app-authed.component';
import {ModuleWithProviders} from "@angular/core";


const appRoutes: Routes = [
    {
        path: 'Login', component: LoginComponent, data: {
        title: 'ORS Marketing Tracker - Login'
    }
    },
    {
        path: 'Application',
        component: AuthedAppComponent,
        data: {
            title: 'ORS Marketing Tracker'
        }
    }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);