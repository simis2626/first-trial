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

    getConsultants() {

        this.consultantProvider.getConsultants()
            .subscribe(consultants => this.consultants = consultants);


    }


    ngOnInit() {
        this.classModal = "modal fade in";
        this.getConsultants();
        this.authStatus = false;


    }

    setSelectedConsultant(setID: string) {
        this.idSelected = setID;
        console.log(setID);


    }


    checkPassword(pwdCheck: string) {
        for (let i = 0; i < this.consultants.length; i++) {
            if (this.consultants[i]._id == this.idSelected && this.consultants[i].password == pwdCheck) {
                console.log("success");
                this.selectedConsultant = this.consultants[i];
                this.triedSubmit = true;
                this.authStatus = true;
                setTimeout(()=> {
                    this.classModal = "modal fade";
                    return true
                }, 2000);
            }

        }

        console.log("failure");
        this.triedSubmit = true;
        return false;
    }


}