/**
 * Created by Andromeda on 19/08/2016.
 */
import {Component, Input, OnInit, Output, EventEmitter} from "@angular/core";
import {Employer} from "../objClass/employer";
import {EmployerProvider} from '../services/employer.service';
import {Response} from "@angular/http";


@Component({
    selector: 'employer',
    templateUrl: 'app/employer-item/employer-item.component.html'
})
export class EmployerComponent implements OnInit {

    constructor(private employerProvider: EmployerProvider) {
        employerProvider.selectedEmployer$.subscribe(
            employer=> {
                if (employer != this.employer) {
                    document.getElementById('anchor' + this.employer._id).style.backgroundColor = "initial";
                }

            }
        )
    }

    @Input()
    public employer: Employer;
    private deleting: boolean = false;
    private deleteWidth: number = 2;
    public deletePercent: string;
    private initcheck: boolean = false;


    @Output() employerSelectedEvent = new EventEmitter();

    @Output() employerDeleted = new EventEmitter();
    @Output() applyMoveClass = new EventEmitter();


    ngOnInit() {
        this.deletePercent = this.deleteWidth + "%";
    }

    attemptsRequested() {
        console.log("AttemptsRequested");
        this.employerProvider.setSelectedEmployer(this.employer);
        document.getElementById('anchor' + this.employer._id).style.backgroundColor = 'LightCyan';

    }


    deleteEmployer() {
        let timer2;
        this.deleting = true;
        setTimeout(()=> {
            let robert: Response;
            this.employerProvider.deleteEmployer(this.employer._id).subscribe((outcome)=> {
                robert = outcome;
                console.log(robert);
                if (robert.status == 200) {
                    this.employerDeleted.emit(this.employer._id);
                    this.deleting = false;
                    clearInterval(timer2);
                }
            });
        }, 12000);

        timer2 = setInterval(()=> {
            if (this.deleteWidth < 100) {
                this.deleteWidth += 2;
                this.deletePercent = this.deleteWidth + "%";
            } else {
                if (!this.initcheck) {
                    this.applyMoveClass.emit(this.employer._id);
                    this.initcheck = true;
                }
            }
            console.log(this.deletePercent);
        }, 80)

    }


}
