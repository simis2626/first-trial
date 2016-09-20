/**
 * Created by andromeda on 18/08/2016.
 */
import {Component} from "@angular/core";
import "../services/rxjs-operators";
import {EmployerProvider} from "../services/employer.service";
import {ConsultantProvider} from "../services/consultant.service";

@Component({
    selector: 'app-authed',
    templateUrl: 'app/app-authed/app-authed.component.html'
})
export class AuthedAppComponent {

    constructor(employerProvider: EmployerProvider, consultantProvider: ConsultantProvider) {
        this.consultantProvider = consultantProvider;
        employerProvider.selectedEmployer$.subscribe(
            employer => {
                this.showMarketing = true;
            }
        )

    }

    consultantProvider: ConsultantProvider;
    selectedHeader;
    activeClass = "btn btn-primary active";
    inactiveClass = "btn btn-default";
    public headerButtons;
    public appTitle = "ORS Marketing Tracker";
    public subTitle = "for Consultant";
    public activeButton;
    private authState: boolean = false;
    public showMarketing: boolean;


    ngOnInit() {
        this.headerButtons = [
            this.activeClass, this.inactiveClass, this.inactiveClass

        ];
        this.subTitle = "for " + this.consultantProvider.selectedConsultant.name;
        this.activeButton = 1;
        this.showMarketing = false;
    }


    headingClicked(inString: string) {

        this.selectedHeader = inString;
        switch (this.selectedHeader) {

            case "marketing":
                this.headerButtons = [
                    this.activeClass, this.inactiveClass, this.inactiveClass

                ];
                this.activeButton = 1;
                break;
            case "consultant":
                this.headerButtons = [
                    this.inactiveClass, this.activeClass, this.inactiveClass

                ];
                this.activeButton = 2;
                break;
            case "seeker":
                this.headerButtons = [
                    this.inactiveClass, this.inactiveClass, this.activeClass

                ];
                this.activeButton = 3;
                break;
        }


    }

    cancelMarketing() {

        this.showMarketing = false;

    }


}





