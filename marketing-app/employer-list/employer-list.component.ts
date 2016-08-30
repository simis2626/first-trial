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
    private ready: boolean = false;
    public employerSelected: boolean = false;
    @Output() employerSelectedEmit = new EventEmitter();
    getEmployers() {

        this.employerProvider.getEmployers()
            .subscribe(employers => this.employers = employers);


    }


    ngOnInit() {
        this.getEmployers();
        setTimeout(()=> this.ready = true, 300);
    }

    onEmployerDelete(employerId: string) {
        //  indexnum = this.employers.findIndex({_id:employerId});


    }


}
