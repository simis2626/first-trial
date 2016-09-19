/**
 * Created by Andromeda on 19/08/2016.
 */
import {Component, Input, OnInit, Output, EventEmitter, AfterViewInit} from "@angular/core";
import {Employer} from "../objClass/employer";
import {EmployerProvider} from "../services/employer.service";
import {Response} from "@angular/http";


@Component({
    selector: 'employer',
    templateUrl: 'app/employer-item/employer-item.component.html',
    styleUrls: ['app/forms/employer-form.component.css']
})
export class EmployerComponent implements OnInit, AfterViewInit {

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
    @Input() public seqNumber: number;
    private deleting: boolean = false;
    private editing: boolean = false;
    private deleteWidth: number = 2;
    public deletePercent: string;
    private initcheck: boolean = false;

    public transitionIn: boolean = false;


    @Output() employerSelectedEvent = new EventEmitter();

    @Output() employerDeleted = new EventEmitter();
    @Output() applyMoveClass = new EventEmitter();


    ngOnInit() {
        this.deletePercent = this.deleteWidth + "%";
    }


    ngAfterViewInit() {
        setTimeout(()=> {
            this.transitionIn = true
        }, this.seqNumber * 150);

    }

    editEmployer() {
        this.editing = true;
        setTimeout(()=> {
            document.getElementById("edit" + this.employer._id).scrollIntoView(true);
        }, 100);
    }

    savedEmployer(event) {
        document.getElementById("employ" + this.employer._id).scrollIntoView(true);

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
        }, 3000);

        timer2 = setInterval(()=> {
            if (this.deleteWidth < 100) {
                this.deleteWidth += 10;
                this.deletePercent = this.deleteWidth + "%";
            } else {
                if (!this.initcheck) {
                    this.applyMoveClass.emit(this.employer._id);
                    this.initcheck = true;
                }
            }
            console.log(this.deletePercent);
        }, 260)

    }


}
