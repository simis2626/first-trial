/**
 * Created by Andromeda on 19/08/2016.
 */
import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Employer} from '../objClass/employer';
import {EmployerProvider} from '../services/employer.service';


@Component(
    {
        selector: 'employer-list',
        templateUrl: 'app/employer-list/employer-list.component.html'
    })
export class EmployerList implements OnInit {
    constructor(private employerProvider: EmployerProvider) {
    }

    public selectedEmployer: Employer;
    employers: Employer[];
    empClasses;
    private ready: boolean = false;
    public employerSelected: boolean = false;
    @Output() employerSelectedEmit = new EventEmitter();
    getEmployers() {

        this.employerProvider.getEmployers()
            .subscribe(employers => this.employers = employers);


    }


    ngOnInit() {
        this.empClasses = [];
        this.getEmployers();
        setTimeout(()=> this.ready = true, 300);
        setTimeout(()=> {
            for (let i = 0; i < this.employers.length; i++) {
                let val = '{"id":"' + this.employers[i]._id + '","moveClass":"false"}';

                this.empClasses.push(JSON.parse(val));
            }
            console.log(this.empClasses);
        }, 3000);
    }

    onEmployerDelete(employerId: string) {
        console.log(employerId);
        this.employers = this.employers.filter((emps)=> {
            return emps._id != employerId;
        });
        console.log(this.employers);
    }

    getMoveClass(empId: string) {
        for (let i = 0; i < this.empClasses.length; i++) {
            //noinspection TypeScriptUnresolvedVariable
            if (empId == this.empClasses[i].id) {
                //noinspection TypeScriptUnresolvedVariable
                console.log("getMoveClass run for " + empId);
                return this.empClasses[i].moveClass;

            }


        }

    }

    changeClass(empId: string) {
        for (let i = 0; i < this.empClasses.length; i++) {
            //noinspection TypeScriptUnresolvedVariable
            if (empId == this.empClasses[i].id) {
                //noinspection TypeScriptUnresolvedVariable
                this.empClasses[i].moveClass = true;
            }


        }
        console.log(this.empClasses);
    }

}
