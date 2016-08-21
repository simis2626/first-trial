/**
 * Created by Andromeda on 21/08/2016.
 */
/**
 * Created by Andromeda on 19/08/2016.
 */
import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {Attempt} from '../objClass/attempt';
import {AttemptProvider} from '../services/attempt.service';
import {Employer} from "../objClass/employer";
import {EmployerProvider} from "../services/employer.service";


@Component(
    {
        selector: 'marketing-list',
        templateUrl: 'app/marketing-list/marketing-list.component.html',
        providers: [AttemptProvider, EmployerProvider],
    })
export class AttemptList implements OnInit, OnChanges {
    constructor(private attemptProvider: AttemptProvider, private employerProvider: EmployerProvider) {


    }

    private employer: Employer;
    private employerID: string;
    private ready: boolean = false;


    ngOnInit() {
        this.employer = this.employerProvider.getSelectedEmployer();
        setTimeout(()=> {
            console.log(this.employer);
            this.getAttempts();
        }, 2000)


    }

    ngOnChanges() {
        this.employer = this.employerProvider.getSelectedEmployer();
        setTimeout(()=> {
            console.log(this.employer);
            this.getAttempts();
        }, 2000)


    }



    private selectedAttempt: Attempt;
    private attempts: Attempt[];


    getAttempts() {

        setTimeout(()=> {

                this.attemptProvider.getAttempts(this.employer._id)
                    .subscribe(attempts => this.attempts = attempts);
                setTimeout(()=>this.ready = true, 5000);

            }
            , 1000)


    }


    attemptSelected(attempt: Attempt) {
        this.selectedAttempt = attempt;
    }


}