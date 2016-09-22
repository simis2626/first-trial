/**
 * Created by Andromeda on 11/09/2016.
 */
import {Component, Output, EventEmitter, AfterViewInit, Input, OnInit} from "@angular/core";
import {Attempt} from "../objClass/attempt";
import {AttemptProvider} from "../services/attempt.service";
import {ConsultantProvider} from "../services/consultant.service";
import {EmployerProvider} from "../services/employer.service";
import forEach = require("core-js/fn/array/for-each");

@Component({
    selector: 'attempt-form',
    templateUrl: 'app/forms/attempt-form.component.html',
    styleUrls: ['app/forms/attempt-form.component.css']
})
export class AttemptFormComponent implements AfterViewInit, OnInit {
    public clients: boolean[] = [true];
    public countofClients: number;
    public showSuccess: boolean = false;
    public showPending: boolean = false;
    public clientsAdded: string[] = [];
    public transitionInForm: boolean = false;
    public countClients: boolean[] = [];
    public attemptProvider: AttemptProvider;
    public employerProvider: EmployerProvider;

    constructor(attemptProvider: AttemptProvider, consultantProvider: ConsultantProvider, employerProvider: EmployerProvider) {
        this.attemptProvider = attemptProvider;
        this.employerProvider = employerProvider;
        this.countofClients = 0;
        this.model = new Attempt(
            consultantProvider.selectedConsultant.userId,
            "",
            false,
            new Date,
            [""],
            employerProvider.getSelectedEmployer()._id);


    }


    ngOnInit() {


        if (this.optionalModel) {
            this.model = this.optionalModel;
            this.model.clientsReferred.forEach((position)=> {
                this.countClients.push(true);
                this.countofClients++;
            });


        }
    }

    ngAfterViewInit() {
        setTimeout(()=> {
            this.transitionInForm = true;
        }, 60);

    }

    deleteClient(indexNum: number) {
        console.log(indexNum);
        this.model.clientsReferred.splice(indexNum, 1);


    }


    @Input() optionalModel: Attempt;

    @Output() attemptSaved = new EventEmitter();
    @Output() attemptCanceled = new EventEmitter();


    addClient() {
        this.countofClients++;
        this.clients.push(true);
        this.clientsAdded.push(this.model.clientsReferred[this.countofClients - 1])

    }

    getClientCount(): number {
        return this.countofClients;

    }

    public model: Attempt;


    onSubmit() {

        this.showPending = true;
        if (!this.optionalModel) {
            this.model.dateAdded = new Date;
            this.attemptProvider.newAttempt(this.model).subscribe((data)=> {

                this.attemptSaved.emit(data);
                this.showPending = false;
                this.showSuccess = true;
                setTimeout(()=>this.onCancel(), 500);


            });
        } else {
            this.attemptProvider.updateAttempt(this.model).subscribe((data)=> {

                this.attemptSaved.emit(data);
                this.showPending = false;
                this.showSuccess = true;
                setTimeout(()=>this.onCancel(), 500);
            });
        }
    }

    onCancel() {
        this.transitionInForm = false;
        this.attemptCanceled.emit();

    }
}
