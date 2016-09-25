/**
 * Created by Andromeda on 2/09/2016.
 */
import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "../login/login.component";
import {ModuleWithProviders} from "@angular/core";
import {AuthGuard} from "../services/auth.guard";
import {AdminGuard} from "../services/admin.guard";


const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/Login',
        pathMatch: 'full'
    },
    {
        path: 'Signup',
        component: LoginComponent,
        data: {
            title: 'ORS Marketing Tracker - Login'
        }
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
        canActivate: [AuthGuard],
        loadChildren: '/app/root/primary.module#PrimaryModule',
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