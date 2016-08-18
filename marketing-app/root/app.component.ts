/**
 * Created by andromeda on 18/08/2016.
 */
import {Component, OnInit} from '@angular/core';
@Component({
    selector: 'root-component',
    templateUrl: 'app/root/app.component.html'
})
export class AppComponent implements OnInit {

    selectedHeader;
    activeClass = "btn btn-primary active";
    inactiveClass = "btn btn-default";
    headerButtons;

    ngOnInit() {
        this.headerButtons = [
            this.activeClass, this.inactiveClass, this.inactiveClass

        ];
    }


    headingClicked(inString: string) {

        this.selectedHeader = inString;
        switch (this.selectedHeader) {

            case "marketing":
                this.headerButtons = [
                    this.activeClass, this.inactiveClass, this.inactiveClass

                ];
                break;
            case "consultant":
                this.headerButtons = [
                    this.inactiveClass, this.activeClass, this.inactiveClass

                ];
                break;
            case "seeker":
                this.headerButtons = [
                    this.inactiveClass, this.inactiveClass, this.activeClass

                ];
                break;
        }


    }

}





