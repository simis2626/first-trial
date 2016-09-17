/**
 * Created by Andromeda on 11/09/2016.
 */
import {Component} from "@angular/core";
import {Employer} from "../objClass/Employer";
import {EmployerProvider} from "../services/employer.service";

@Component({
    selector: 'employer-form',
    templateUrl: 'app/forms/employer-form.component.html'
})
export class EmployerFormComponent {
    roles: boolean[] = [true];

    constructor(employerProvider: EmployerProvider) {
        console.log(this.roles);
    }


    addRole() {
        this.roles.push(true);
    }


    model = Employer;

    submitted = false;

    onSubmit() {
        this.submitted = true;
    }

    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.model);
    }
}