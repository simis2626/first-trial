/**
 * Created by Andromeda on 21/08/2016.
 */
/**
 * Created by Andromeda on 19/08/2016.
 */
import {Component, OnInit} from "@angular/core";
import {Attempt} from "../objClass/attempt";
import {AttemptProvider} from "../services/attempt.service";
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

    checkAttempt;
    ngOnInit() {
        this.employer = this.employerProvider.getSelectedEmployer();
        this.getAttempts();
        this.attemptClasses = [];
        this.checkAttempt = setInterval(()=> {
            if (this.attempts) {


                for (let i = 0; i < this.attempts.length; i++) {
                    let val = '{"id":"' + this.attempts[i]._id + '","moveClass":"true"}';

                    this.attemptClasses.push(JSON.parse(val));
                }
                this.ready = true;
                clearInterval(this.checkAttempt);
            }
        }, 500);
    }


    private employer: Employer;
    private ready: boolean = false;
    attemptClasses;
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

    onAttemptDelete(attemptId: string) {
        this.attempts = this.attempts.filter((attempts)=> {
            return attempts._id != attemptId;
        });
    }

    getMoveClass(empId: string) {

        for (let i = 0; i < this.attemptClasses.length; i++) {
            if (this.attemptClasses[i].id == empId) {
                return this.attemptClasses[i].moveClass;
            }
        }


    }

    changeClass(empId: string) {
        for (let i = 0; i < this.attemptClasses.length; i++) {
            if (this.attemptClasses[i].id == empId) {
                this.attemptClasses[i].moveClass = false;
            }


        }
    }

}
