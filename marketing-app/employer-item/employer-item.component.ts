/**
 * Created by Andromeda on 19/08/2016.
 */
import {Component, Input, OnInit, Output, EventEmitter} from "@angular/core";
import {Employer} from "../objClass/employer";
import {EmployerProvider} from '../services/employer.service';


@Component({
    selector: 'employer',
    templateUrl: 'app/employer-item/employer-item.component.html'
})
export class EmployerComponent implements OnInit {

    constructor(private employerProvider: EmployerProvider) {
        employerProvider.selectedEmployer$.subscribe(
            employer=> {
                if (employer != this.employer) {
                    document.getElementById('anchor' + this.employer._id).style.backgroundColor = "initial";
                }

            }
        )
    }

    @Input()
    public employer: Employer;

    @Output() employerSelectedEvent = new EventEmitter();

    ngOnInit() {

    }

    attemptsRequested() {
        console.log("AttemptsRequested");
        this.employerProvider.setSelectedEmployer(this.employer);
        document.getElementById('anchor' + this.employer._id).style.backgroundColor = "LightCyan";

    }



}
