import {ModuleWithProviders} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AuthedAppComponent} from "../app-authed/app-authed.component";
/**
 * Created by Andromeda on 25/09/2016.
 */



export const routing: ModuleWithProviders = RouterModule.forChild([
    {path: '', component: AuthedAppComponent}
]);