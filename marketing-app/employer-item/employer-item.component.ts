/**
 * Created by Andromeda on 19/08/2016.
 */
import {Component, Input, OnInit} from "@angular/core";
import {Employer} from "../objClass/employer";
@Component({
    selector: 'employer',
    templateUrl: 'app/employer-item/employer-item.component.html'
})
export class EmployerComponent implements OnInit {

    @Input()
    employer: Employer;

    ngOnInit() {
        console.log(this.employer.toString());

    }


}