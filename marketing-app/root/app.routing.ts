/**
 * Created by Andromeda on 2/09/2016.
 */
import {Routes, RouterModule} from '@angular/router';

import {LoginComponent} from '../login/login.component';
import {AuthedAppComponent} from '../app-authed/app-authed.component';
import {ModuleWithProviders} from "@angular/core";
import {AuthGuard} from "../services/auth.guard";
import {AdminGuard} from "../services/admin.guard";


const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/Application',
        pathMatch: 'full'
    },

    {
        path: 'Login',
        component: LoginComponent,
        data: {
        title: 'ORS Marketing Tracker - Login'
    }
    },
    {
        path: 'Application',
        component: AuthedAppComponent,
        canActivate: [AuthGuard],
        data: {
            title: 'ORS Marketing Tracker'
        }
    },
    {
        path: 'Admin',
        canActivate: [AdminGuard],
        redirectTo: '/Application'

    },
    {
        path: '*',
        redirectTo: '/',
        pathMatch: 'full'
    },
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);