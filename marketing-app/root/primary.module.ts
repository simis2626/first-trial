/**
 * Created by Andromeda on 25/09/2016.
 */


import {NgModule} from "@angular/core";
import {EmployerFormComponent} from "../forms/employer-form.component";
import {AttemptFormComponent} from "../forms/attempt-form.component";
import {AuthedAppComponent} from "../app-authed/app-authed.component";
import {EmployerComponent} from "../employer-item/employer-item.component";
import {EmployerList} from "../employer-list/employer-list.component";
import {AttemptList} from "../marketing-list/marketing-list.component";
import {AttemptComponent} from "../marketing-item/marketing-item.component";
import {MarketingAuditComponent} from "../marketing-audit/marketing-audit.component";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SmallComponents} from "../small-components/small-components";
import {routing} from "./primary.routing";


@NgModule({
    declarations: [AttemptFormComponent, MarketingAuditComponent, EmployerFormComponent, AuthedAppComponent, EmployerComponent, EmployerList, AttemptComponent, AttemptList],
    imports: [FormsModule, CommonModule, SmallComponents, routing],

})
export class PrimaryModule {


}
