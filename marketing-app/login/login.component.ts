/**
 * Created by andromeda on 19/08/2016.
 */
import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Consultant} from "../objClass/consultant";
import {ConsultantProvider} from "../services/consultant.service";
import {AuthProvider} from "../services/auth.service";


@Component({
    selector: 'login',
    templateUrl: 'app/login/login.component.html',


})
export class LoginComponent implements OnInit {
    constructor(private consultantProvider: ConsultantProvider, private authProvider: AuthProvider, private router: Router) {
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
    public showPending: boolean = false;
    public remember: boolean = false;
    public showSavedLogin: boolean = false;

    getConsultants(): Promise<boolean> {
        return new Promise((resolve)=> {
            this.consultantProvider.getConsultants()
                .subscribe(consultants => {
                    this.consultants = consultants;
                    resolve(true);
                });

        });
    }


    ngOnInit() {
        this.classModal = "modal fade in";
        this.getConsultants().then(()=> {
        this.authProvider.checkToken().then((loggedIn)=> {
            if (loggedIn) {
                this.showSavedLogin = true;
                this.consultantProvider.selectedConsultant = this.consultants.find((consultant: Consultant)=> {
                    return consultant._id === this.authProvider.preloggedInUser;
                });
                setTimeout(()=> {
                    this.router.navigate(['./Application']);
                }, 800);
            }
        });
        });
        this.authStatus = false;
        this.showSuccess = false;
        this.showWarning = false;


    }

    setSelectedConsultant(setID: string) {
        this.idSelected = setID;
        for (let i = 0; i < this.consultants.length; i++) {
            if (this.consultants[i]._id == this.idSelected)
                this.selectedConsultant = this.consultants[i];
        }


    }

    toggleRememberme() {
        if (this.remember) {
            this.remember = false;
        } else {
            this.remember = true;
        }
    }

    checkPassword(pwdCheck: string) {

        for (let i = 0; i < this.consultants.length; i++) {
            if (this.consultants[i]._id == this.idSelected) {
                this.triedSubmit = true;
                this.showPending = true;

                this.authProvider.LoginAttempt(this.consultants[i], pwdCheck, this.remember)
                    .subscribe(authResult => {
                        this.showPending = false;
                        this.authStatus = authResult.SuccessfulAuth;
                        if (this.authStatus) {
                            this.checkSuccessWarning();
                            this.consultantProvider.selectedConsultant = this.consultants[i];
                            setTimeout(()=> {
                                this.classModal = "modal fade";
                                this.checkSuccessWarning();
                                this.router.navigate(['./Application']);
                            }, 1500);
                        } else {
                            this.checkSuccessWarning();
                        }

                        return this.authStatus;
                    });

            }
        }

        this.triedSubmit = true;
        //document.getElementById('pwdinput').innerText = "";
        setTimeout(()=> {this.triedSubmit=false; this.checkSuccessWarning();} , 2000);


    }

    onkPress(event2) {
        if (event2.keyCode == 13) {

            //noinspection TypeScriptUnresolvedVariable
            var saus = <HTMLInputElement>(document.getElementById('pwdinput'));
            this.checkPassword(saus.value);
        }
    }


    hide() {

        this.classModal = "modal fade";
    }
    
    checkSuccessWarning(){

        if (this.triedSubmit && this.authStatus) {
            this.showSuccess = true;
        }
        if (this.triedSubmit && (!this.authStatus)) {
            this.showWarning = true;
        }
        if (!this.triedSubmit) {
            this.showWarning = false;
            this.showSuccess = false;
        }
    }


}
