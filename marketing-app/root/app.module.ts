/**
 * Created by andromeda on 18/08/2016.
 */
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule, JsonpModule} from '@angular/http';
import {AuthedAppComponent}  from '../app-authed/app-authed.component';
import {EmployerProvider} from "../services/employer.service";
import {EmployerComponent} from "../employer-item/employer-item.component";
import {EmployerList} from "../employer-list/employer-list.component";
import {AttemptList} from "../marketing-list/marketing-list.component";
import {AttemptComponent} from "../marketing-item/marketing-item.component";
import {routing, appRoutingProviders} from '../root/app.routing';
import {AppComponent} from '../root/app.component';



import {LoginComponent} from '../login/login.component';
import {AttemptProvider} from '../services/attempt.service';
import {ConsultantProvider} from '../services/consultant.service';
import {ForceActiveDirective} from '../directives/directives';
import {AuthProvider} from "../services/auth.service";
import {AuthGuard} from "../services/auth.guard";


@NgModule({
    imports: [BrowserModule, HttpModule, JsonpModule, routing],
    declarations: [AppComponent, AuthedAppComponent, EmployerComponent, EmployerList, LoginComponent, ForceActiveDirective, AttemptComponent, AttemptList],
    bootstrap: [AppComponent],
    providers: [AuthGuard, AuthProvider, EmployerProvider, AttemptProvider, ConsultantProvider, appRoutingProviders]
})
export class AppModule {
}