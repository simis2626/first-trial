/**
 * Created by Andromeda on 21/08/2016.
 */
/**
 * Created by Andromeda on 19/08/2016.
 */
import {Component, Input, OnInit, OnChanges, DoCheck} from '@angular/core';
import {Attempt} from '../objClass/attempt';
import {AttemptProvider} from '../services/attempt.service';
import {Employer} from "../objClass/employer";
import {EmployerProvider} from "../services/employer.service";


@Component(
    {
        selector: 'marketing-list',
        templateUrl: 'app/marketing-list/marketing-list.component.html'
    })
export class AttemptList implements OnInit {
    constructor(private attemptProvider: AttemptProvider, private employerProvider: EmployerProvider) {
        employerProvider.selectedEmployer$.subscribe(
            employer => {
                this.ready = false;
                this.employer = employer;
                this.getAttempts();
            }
        );

    }


    ngOnInit() {
        this.employer = this.employerProvider.getSelectedEmployer();
        this.getAttempts();
    }


    private employer: Employer;
    private ready: boolean = false;

    private selectedAttempt: Attempt;
    private attempts: Attempt[];


    getAttempts() {

        setTimeout(()=> {

                this.attemptProvider.getAttempts(this.employer._id)
                    .subscribe(attempts => this.attempts = attempts);
                setTimeout(()=>this.ready = true, 2000);

            }
            , 50)


    }


    attemptSelected(attempt: Attempt) {
        this.selectedAttempt = attempt;
    }


}
