/**
 * Created by Andromeda on 25/09/2016.
 */
import {Component, OnInit} from "@angular/core";
import {ConsultantProvider} from "../services/consultant.service";
import {Consultant} from "../objClass/consultant";
import {AttemptProvider} from "../services/attempt.service";
import {Attempt} from "../objClass/attempt";
import {EmployerProvider} from "../services/employer.service";


@Component({

    selector: 'marketing-audit',
    templateUrl: '/app/marketing-audit/marketing-audit.component.html'


})
export class MarketingAuditComponent implements OnInit {
    date: Date;
    today: Date;
    employerProvider: EmployerProvider;
    consultantProvider: ConsultantProvider;
    marketingProvider: AttemptProvider;
    consultants: Consultant[];
    attemptsOriginal: Attempt[];
    selectedConsultant: Consultant;
    ready: boolean = false;
    blank: boolean = true;
    attempts: Attempt[];

    constructor(consultantProvider: ConsultantProvider, marketingProvider: AttemptProvider, employerProvider: EmployerProvider) {
        this.consultantProvider = consultantProvider;
        this.marketingProvider = marketingProvider;
        this.employerProvider = employerProvider;
    }


    ngOnInit() {
        this.consultantProvider.getConsultants().subscribe((data)=>this.consultants = data);
        this.today = new Date();
    }


    setSelectedConsultant(selectedConsultant: Consultant) {
        this.blank = false;
        this.ready = false;
        this.selectedConsultant = selectedConsultant;
        this.marketingProvider.getAttemptsByConsultant(selectedConsultant.userId)
            .subscribe((data)=> {
                this.attempts = data.reverse();
                this.attemptsOriginal = this.attempts;

                for (let i = 0; i < this.attempts.length; i++) {
                    console.log(i);
                    this.attempts[i].employerName = this.employerProvider.getEmployerName(this.attempts[i].employerId);
                    console.log(this.attempts[i].employerName);
                }


                this.ready = true;

            });
    }


    getName(): string {
        if (this.selectedConsultant) {
            return this.selectedConsultant.name;
        } else {
            return "Select a Consultant";
        }
    }

    doFilter(event) {
        this.date = event.target.valueAsDate;
        console.log(this.date);
        this.attempts = this.attemptsOriginal.filter((ele, ind, arr)=> {
            console.log(ele.dateAdded);
            if (ele.dateAdded == this.date) {
                return true;

            } else {
                return false;
            }


        })


    }


}