/**
 * Created by Andromeda on 19/08/2016.
 */
import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import {Employer} from "../objClass/employer";
import {EmployerProvider} from "../services/employer.service";


@Component(
    {
        selector: 'employer-list',
        templateUrl: 'app/employer-list/employer-list.component.html'
    })
export class EmployerList implements OnInit {
    constructor(private employerProvider: EmployerProvider) {
    }

    showAddForm: boolean = false;
    public selectedEmployer: Employer;
    employers: Employer[];
    empClasses;
    private ready: boolean = false;
    public employerSelected: boolean = false;
    checkEmployer;

    @Output() employerSelectedEmit = new EventEmitter();
    getEmployers() {

        this.employerProvider.getEmployers()
            .subscribe(employers => this.employers = employers);


    }


    ngOnInit() {
        this.empClasses = [];
        this.getEmployers();

        this.checkEmployer = setInterval(()=> {
            if (this.employers) {


            for (let i = 0; i < this.employers.length; i++) {
                let val = '{"id":"' + this.employers[i]._id + '","moveClass":"true"}';

                this.empClasses.push(JSON.parse(val));
            }
                this.ready = true;
                clearInterval(this.checkEmployer);
            }
        }, 500);
    }

    onEmployerDelete(employerId: string) {
        console.log(employerId);
        this.employers = this.employers.filter((emps)=> {
            return emps._id != employerId;
        });
    }

    getMoveClass(empId: string) {
        for (let i = 0; i < this.empClasses.length; i++) {
            //noinspection TypeScriptUnresolvedVariable
            if (this.empClasses[i].id == empId) {
                return this.empClasses[i].moveClass;

            }


        }

    }

    showAddForms() {
        this.showAddForm = true;
        setTimeout(()=> {
            document.getElementById("empForm").scrollIntoView(true);
        }, 50);

    }

    hideAddForms() {

        setTimeout(()=> {
            this.showAddForm = true;
        }, 1000);

    }


    changeClass(empId: string) {
        for (let i = 0; i < this.empClasses.length; i++) {
            if (this.empClasses[i].id == empId) {
                console.log(this.empClasses[i].id);
                this.empClasses[i].moveClass = false;
                this.employerSelectedEmit.emit();
            }


        }
    }

}
