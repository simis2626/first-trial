/**
 * Created by Andromeda on 11/09/2016.
 */
import {Component, Output, EventEmitter, AfterViewInit} from "@angular/core";
import {Employer} from "../objClass/employer";
import {EmployerProvider} from "../services/employer.service";

@Component({
    selector: 'employer-form',
    templateUrl: 'app/forms/employer-form.component.html',
    styleUrls: ['app/forms/employer-form.component.css']
})
export class EmployerFormComponent implements AfterViewInit {
    public roles: boolean[] = [true];
    public countofRoles: number;
    public rolesAdded: string[] = [];
    public transitionInForm: boolean = false;
    constructor(employerProvider: EmployerProvider) {
        console.log(this.roles);
        this.countofRoles = 0;
        this.model = new Employer("", {name: "", notes: ""}, {
            street: "",
            suburb: "",
            postcode: 0
        }, "", "", false, [""], false, "", false);

    }

    ngAfterViewInit() {

        setTimeout(()=> {
            this.transitionInForm = true;
        }, 10);

    }


    @Output() employerSaved = new EventEmitter();
    @Output() employerCanceled = new EventEmitter();



    addRole() {
        this.countofRoles++;
        this.roles.push(true);
        this.rolesAdded.push(this.model.positionsNeeded[this.countofRoles - 1])

    }

    getRoleCount(): number {
        return this.countofRoles;

    }

    model: Employer;


    onSubmit() {

    }

    onCancel() {
        this.transitionInForm = false;
        this.employerCanceled.emit();

    }



    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.model);
    }
}
