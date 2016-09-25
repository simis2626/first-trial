/**
 * Created by Andromeda on 25/09/2016.
 */


import {Component, OnInit} from "@angular/core";
import {ConsultantProvider} from "../services/consultant.service";
import {Consultant} from "../objClass/consultant";
@Component({
    template: `
<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">Request Access</h3>
  </div>
  <div class="panel-body">
    <form name="requestAccess" #consultantForm="ngForm" (ngSubmit)="onSubmit()"><div class="form-group">
        <label for="userId">ORS User ID:</label>
        <input [(ngModel)]="model.userId" required type="text" id="userId" maxlength="10" name="userId"></div>
        <div class="form-group"><label for="name">Name:</label>
        <input required type="text" [(ngModel)]="model.name" name="name" id="name"></div>
        <button *ngIf="!showSuccess" class="btn btn-primary" [disabled]="!consultantForm.form.valid">Submit</button>
        <div *ngIf="showPending" class="alert alert-info" role="alert">Adding. Please wait...

        </div>
          
    </form>
    <form  name="requestPassword" #paswordForm="ngForm" (ngSubmit)="onSubmitPassword()" *ngIf="showSuccess">
    <h4>Please enter a password</h4>
    <label for="firstPassword">Password:</label><input id="firstPassword" #pwd1 type="password" required>
    <label for="secondPassword">Please Re-enter to confirm:</label><input #pwd2 type="password" name="password" required id="secondPassword" [(ngModel)]="password">
    <button class="btn btn-primary" [disabled]="!paswordForm.form.valid" *ngIf="!finished">Submit</button>
    </form>  
    
    
    
    
    
    <div *ngIf="finished" class="alert alert-success" role="alert">
     Added <br>
            Please ask an Administrator to approve your request.</div>
  </div>
  <a *ngIf="finished" routerLink="/Login" routerLinkActive="true">Return to Login Page</a>
</div>
`


})

export class SignupComponent implements OnInit {
    public model: Consultant;
    finished: boolean = false;
    password: string;
    id: string;
    consultantProvider: ConsultantProvider;
    private showPending: boolean;
    private showSuccess: boolean;

    constructor(consultantProvider: ConsultantProvider) {
        this.consultantProvider = consultantProvider;
    };

    ngOnInit() {
        this.model = new Consultant("", "", false, false);

    }

    onSubmit() {

        this.showPending = true;
        this.consultantProvider.newConsultant(this.model).subscribe((data)=> {
            this.showPending = false;
            this.showSuccess = true;
            console.log(data);
            //noinspection TypeScriptUnresolvedVariable
            this.id = data.consultant._id;

        });

    }

    onSubmitPassword() {

        this.finished = true;
        this.consultantProvider.newConsultantPassword('{"consultantId":"' + this.id + '","password":"' + this.password + '"}').subscribe((data)=> {
        });

    }


}