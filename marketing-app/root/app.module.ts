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

@NgModule({
    imports: [BrowserModule, HttpModule, JsonpModule],
    declarations: [AppComponent, EmployerComponent, EmployerList],
    bootstrap: [AppComponent],
    providers: [EmployerProvider]
})
export class AppModule {
}