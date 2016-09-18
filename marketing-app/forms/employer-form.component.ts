/**
 * Created by Andromeda on 11/09/2016.
 */
import {Component, Output, EventEmitter} from "@angular/core";
import {Employer} from "../objClass/employer";
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


    @Output() employerSaved = new EventEmitter();
    @Output() employerCanceled = new EventEmitter();



    addRole() {
        this.countofRoles++;
        this.roles.push(true);

    }

    getRoleCount(): number {
        return this.countofRoles;

    }

    model: Employer;


    onSubmit() {

    }

    onCancel() {
        this.employerCanceled.emit();

    }



    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.model);
    }
}
