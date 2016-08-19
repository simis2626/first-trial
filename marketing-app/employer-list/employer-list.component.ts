/**
 * Created by Andromeda on 19/08/2016.
 */
import {Component, Input, OnInit} from '@angular/core';
import {Employer} from '../objClass/employer';
import {EmployerProvider} from '../services/employer.service';


@Component(
    {
        selector: 'employer-list',
        templateUrl: 'app/employer-list/employer-list.component.html',
        providers: [EmployerProvider]
    })
export class EmployerList implements OnInit {
    constructor(private employerProvider: EmployerProvider) {
    }

    selectedEmployer: Employer;
    employers: Employer[];

    getEmployers() {

        this.employerProvider.getEmployers()
            .subscribe(employers => this.employers = employers);


    }


    ngOnInit() {
        this.getEmployers();
    }

    employerSelected(employer: Employer) {
        this.selectedEmployer = employer;
    }


}