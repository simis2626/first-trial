/**
 * Created by Andromeda on 25/09/2016.
 */

import {Component, OnInit, NgModule, ModuleWithProviders} from "@angular/core";
import {ConsultantProvider} from "../services/consultant.service";
import {Consultant} from "../objClass/consultant";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";


@Component({
    template: `
<table class="table table-bordered">
  <tr><th>User ID</th><th>Name</th><th>Approve</th></tr>
  <tr  style="height: 50px" *ngFor="let consultant of consultants" id="row{{consultant._id}}"><td>{{consultant.userId}}</td><td>{{consultant.name}}</td><td><button id="{{consultant._id}}" (click)="approveConsultant($event)" class="btn btn-success" >Approve</button></td></tr>
</table>
<div class="alert alert-info" role="alert" *ngIf="notifySuccess">Consultant Approved</div>
<a routerLink="/Application" routerLinkActive="true">Back to Tracker</a>

`
})
class ConfirmConsultantsComponent implements OnInit {
    consultantProvider: ConsultantProvider;
    consultants: Consultant[];

    constructor(consultantProvider: ConsultantProvider) {
        this.consultantProvider = consultantProvider;

    }


    ngOnInit() {
        this.consultantProvider.getUnapproveds().then((consultants)=> {
            this.consultants = consultants;
            console.log(this.consultants);
        });
    }

    notifySuccess: boolean;

    approveConsultant(event) {
        this.consultantProvider.approveConsultant(event.target.id);
        document.getElementById('row' + event.target.id).hidden = true;
        this.notifySuccess = true;
        setTimeout(()=>this.notifySuccess = false, 1200)


    }


}


const routing: ModuleWithProviders = RouterModule.forChild([
    {path: '', component: ConfirmConsultantsComponent}
]);

@NgModule({
    declarations: [ConfirmConsultantsComponent],
    imports: [CommonModule, routing]

})
export class ConfirmConsultantsModule {


}

