/**
 * Created by andromeda on 18/08/2016.
 */
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule, JsonpModule} from "@angular/http";
import {EmployerProvider} from "../services/employer.service";
import {routing, appRoutingProviders} from "../root/app.routing";
import {AppComponent} from "../root/app.component";
import {LoginComponent} from "../login/login.component";
import {AttemptProvider} from "../services/attempt.service";
import {ConsultantProvider} from "../services/consultant.service";
import {AuthProvider} from "../services/auth.service";
import {AuthGuard} from "../services/auth.guard";
import "../services/rxjs-operators";
import {SmallComponents} from "../small-components/small-components";


@NgModule({
    imports: [BrowserModule, HttpModule, JsonpModule, routing, SmallComponents],
    declarations: [AppComponent, LoginComponent],
    bootstrap: [AppComponent],
    providers: [AuthGuard, AuthProvider, EmployerProvider, AttemptProvider, ConsultantProvider, appRoutingProviders]
})
export class AppModule {
}
