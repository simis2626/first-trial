/**
 * Created by andromeda on 18/08/2016.
 */
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule, JsonpModule} from '@angular/http';
import {AppComponent}  from './app.component';
import {EmployerProvider} from "../services/employer.service";
import {EmployerComponent} from "../employer-item/employer-item.component";
import {EmployerList} from "../employer-list/employer-list.component";
import {AttemptList} from "../marketing-list/marketing-list.component";
import {AttemptComponent} from "../marketing-item/marketing-item.component";





import {LoginComponent} from '../login/login.component';
import {AttemptProvider} from '../services/attempt.service';
import {ConsultantProvider} from '../services/consultant.service';
import {ForceActiveDirective, RemoveActiveDirective} from '../directives/directives';


@NgModule({
    imports: [BrowserModule, HttpModule, JsonpModule],
    declarations: [AppComponent, EmployerComponent, EmployerList, LoginComponent, ForceActiveDirective, RemoveActiveDirective, AttemptComponent, AttemptList],
    bootstrap: [AppComponent],
    providers: [EmployerProvider, AttemptProvider, ConsultantProvider]
})
export class AppModule {
}