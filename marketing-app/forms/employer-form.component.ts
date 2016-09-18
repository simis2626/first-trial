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
    public roles: boolean[] = [true];
    public countofRoles: number;

    constructor(employerProvider: EmployerProvider) {
        console.log(this.roles);
        this.countofRoles = 0;
        this.model = new Employer("", {name: "", notes: ""}, {
            street: "",
            suburb: "",
            postcode: 0
        }, "", "", false, [""], false, "", false);

    }


    addRole() {
        this.countofRoles++;
        this.roles.push(true);

    }


    model: Employer;


    onSubmit() {

    }

    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.model);
    }
}