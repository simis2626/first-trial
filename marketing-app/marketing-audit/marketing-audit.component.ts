/**
 * Created by Andromeda on 25/09/2016.
 */
import {Component, OnInit} from "@angular/core";
import {ConsultantProvider} from "../services/consultant.service";
import {Consultant} from "../objClass/consultant";
import {AttemptProvider} from "../services/attempt.service";
import {Attempt} from "../objClass/attempt";


@Component({

    selector: 'marketing-audit',
    templateUrl: '/app/marketing-audit/marketing-audit.component.html'


})
export class MarketingAuditComponent implements OnInit {

    consultantProvider: ConsultantProvider;
    marketingProvider: AttemptProvider;
    consultants: Consultant[];
    selectedConsultant: Consultant;
    ready: boolean = false;
    attempts: Attempt[];

    constructor(consultantProvider: ConsultantProvider, marketingProvider: AttemptProvider) {
        this.consultantProvider = consultantProvider;
        this.marketingProvider = marketingProvider;
    }


    ngOnInit() {
        this.consultantProvider.getConsultants().subscribe((data)=>this.consultants = data);

    }


    setSelectedConsultant(selectedConsultant: Consultant) {
        this.selectedConsultant = selectedConsultant;
        this.marketingProvider.getAttempts("57dfcbe4c4667e05180f4934")
            .subscribe((data)=> {
                this.attempts = data;
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


}