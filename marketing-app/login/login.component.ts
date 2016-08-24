/**
 * Created by andromeda on 19/08/2016.
 */
import {Component, OnInit} from '@angular/core';
import {Consultant} from '../objClass/consultant';
import {ConsultantProvider} from "../services/consultant.service";



@Component({
    selector: 'login',
    templateUrl: 'app/login/login.component.html',
    providers: [ConsultantProvider]


})
export class LoginComponent implements OnInit {
    constructor(private consultantProvider: ConsultantProvider) {
    }

    consultants: Consultant[];
    selectedConsultant: Consultant;
    public status: boolean = false;
    private idSelected: string;
    public classModal: string;
    public authStatus: boolean = false;
    public triedSubmit: boolean = false;
    public showSuccess: boolean;
    public showWarning: boolean;




    getConsultants() {

        this.consultantProvider.getConsultants()
            .subscribe(consultants => this.consultants = consultants);


    }


    ngOnInit() {
        this.classModal = "modal fade in";
        this.getConsultants();
        this.authStatus = false;
        this.showSuccess = false;
        this.showWarning = false;

    }

    setSelectedConsultant(setID: string) {
        this.idSelected = setID;


    }


    checkPassword(pwdCheck: string) {
        for (let i = 0; i < this.consultants.length; i++) {
            if (this.consultants[i]._id == this.idSelected && this.consultants[i].password == pwdCheck) {

                
                
                
               this.selectedConsultant = this.consultants[i];
                this.triedSubmit = true;
                this.authStatus = true;
                this.checkSuccessWarning();
                setTimeout(()=> {
                    this.classModal = "modal fade";
                    this.checkSuccessWarning();
                    
                }, 1500);
                return true;
            }

        }

        console.log("failure");
        this.triedSubmit = true;
        document.getElementById('pwdinput').innerText = "";
        this.checkSuccessWarning();
        setTimeout(()=> {this.triedSubmit=false; this.checkSuccessWarning();} , 2000);
        return false;


    }

    onkPress(event) {
        if (event.keyCode == 13) {

            //noinspection TypeScriptUnresolvedVariable
            var saus = <HTMLInputElement>(document.getElementById('pwdinput'));
            this.checkPassword(saus.value);
        }
    }


    hide() {

        this.classModal = "modal fade";
    }
    
    checkSuccessWarning(){
     if(this.triedSubmit && this.authStatus){this.showSuccess = true;}
     if(this.triedSubmit && (!this.authStatus)){this.showWarning = true;}   
    if(!this.triedSubmit){this.showWarning = false; this.showSuccess = false;}
        
    
    }
    
}
