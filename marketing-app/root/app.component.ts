/**
 * Created by andromeda on 18/08/2016.
 */
import {Component, Output, EventEmitter} from '@angular/core';
import '../services/rxjs-operators';
import {Employer} from "../objClass/employer";


@Component({
    selector: 'root-component',
    templateUrl: 'app/root/app.component.html'
})
export class AppComponent {

    selectedHeader;
    activeClass = "btn btn-primary active";
    inactiveClass = "btn btn-default";
    public headerButtons;
    public appTitle = "ORS Marketing Tracker";
    public subTitle = "for Alisha Robertson-Ryan";
    public activeButton;
    private authState: boolean = false;
    public showMarketing: boolean;
    private selectedEmployer: Employer;




    ngOnInit() {
        this.headerButtons = [
            this.activeClass, this.inactiveClass, this.inactiveClass

        ];
        this.activeButton = 1;
        this.showMarketing = false;
    }

    displayMarketingList(employer: Employer) {
        this.showMarketing = false;
        setTimeout(()=>this.showMarketing = true, 3);
        this.selectedEmployer = employer;


    }

    getEmployer() {

        return this.selectedEmployer;
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


}





