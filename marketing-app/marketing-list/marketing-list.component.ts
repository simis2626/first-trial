/**
 * Created by Andromeda on 21/08/2016.
 */
/**
 * Created by Andromeda on 19/08/2016.
 */
import {Component, OnInit, Output, EventEmitter} from "@angular/core";
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
                this.getAttempts().then((resolve)=>this.moveClass());
            }
        );

    }

    @Output() hideMarketing = new EventEmitter();
    checkAttempt;
    ngOnInit() {
        this.employer = this.employerProvider.getSelectedEmployer();
        this.attemptClasses = [];

        this.getAttempts().then(()=> {
            this.moveClass();


        });
    }

    moveClass() {
        this.attemptClasses = [];
        for (let i = 0; i < this.attempts.length; i++) {
            let val = '{"id":"' + this.attempts[i]._id + '","moveClass":"true"}';

            this.attemptClasses.push(JSON.parse(val));
        }
        this.ready = true;
    }


    private employer: Employer;
    private ready: boolean = false;
    attemptClasses;
    private selectedAttempt: Attempt;
    private attempts: Attempt[];


    getAttempts(): Promise<boolean> {
        return new Promise((resolve)=> {

                this.attemptProvider.getAttempts(this.employer._id)
                    .subscribe(attempts => {
                        this.attempts = attempts.reverse();
                        resolve(true);
                    });
        });



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

    public showAddForm: boolean = false;
    changeClass(empId: string) {
        for (let i = 0; i < this.attemptClasses.length; i++) {
            if (this.attemptClasses[i].id == empId) {
                this.attemptClasses[i].moveClass = false;
            }


        }
    }

    attemptAdded(event) {

        this.attempts.unshift(event.attempt);
        console.log(event.attempt);
        setTimeout(()=> {
            let val = '{"id":"' + event.attempt._id + '","moveClass":"true"}';

            this.attempts.push(JSON.parse(val));
            document.getElementById("att" + event.attempt._id).scrollIntoView(true);
        }, 10000);


    }

    showAddForms() {
        this.showAddForm = true;
        setTimeout(()=> {
            document.getElementById("attForm").scrollIntoView(true);
        }, 50);

    }

    hideAddForms() {

        setTimeout(()=> {
            this.showAddForm = false;
        }, 1000);

    }

    hideMarketinga() {
        this.hideMarketing.emit();
    }

}
