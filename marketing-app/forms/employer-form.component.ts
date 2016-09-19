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
    public showSuccess: boolean = false;
    public showPending: boolean = false;
    public rolesAdded: string[] = [];
    public transitionInForm: boolean = false;
    public employerProvider: EmployerProvider;
    constructor(employerProvider: EmployerProvider) {
        this.employerProvider = employerProvider;
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
        }, 60);

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

    public model: Employer;


    onSubmit() {
        this.showPending = true;
        this.employerProvider.newEmployer(this.model).subscribe((data)=> {

            this.employerSaved.emit(data);
            this.showPending = false;
            this.showSuccess = true;
            setTimeout(()=>this.onCancel(), 500);


        });
    }

    onCancel() {
        this.transitionInForm = false;
        this.employerCanceled.emit();

    }
}
