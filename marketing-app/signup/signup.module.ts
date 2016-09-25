/**
 * Created by Andromeda on 25/09/2016.
 */

import {NgModule, ModuleWithProviders} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {SignupComponent} from "./signup.component";


const routing: ModuleWithProviders = RouterModule.forChild([
    {path: '', component: SignupComponent}
]);

@NgModule({
    declarations: [SignupComponent],
    imports: [FormsModule, CommonModule, routing]

})
export class SignupModule {


}

