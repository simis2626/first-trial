/**
 * Created by andromeda on 21/08/2016.
 */
import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import {ConsultantProvider} from '../services/consultant.service';
import {Consultant} from "../objClass/consultant";


@Directive({selector: '[myForceActive]'})
export class ForceActiveDirective implements OnInit {
    @Input('myForceActive') selectedID: string;


    private selectedConsultant: Consultant;

    constructor(private el: ElementRef, consultantProvider: ConsultantProvider) {
        el.nativeElement.classList.add("btn");
        el.nativeElement.classList.add("btn-default");
        consultantProvider.selectedConsultant$.subscribe(
            consultant => {
                this.selectedConsultant = consultant;
            }
        );

    }

    ngOnInit() {

    }
    

    @HostListener('click') onClick() {
        console.log("The selID is" + this.selectedID);
        this.el.nativeElement.classList.add("active");

    }

}


