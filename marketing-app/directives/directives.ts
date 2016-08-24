/**
 * Created by andromeda on 21/08/2016.
 */
import {Directive, ElementRef, HostListener, Input} from '@angular/core';


@Directive({selector: '[myForceActive]'})
export class ForceActiveDirective {
    @Input('myForceActive') selectedID: string;

    constructor(private el: ElementRef) {
        el.nativeElement.classList.add("btn");
        el.nativeElement.classList.add("btn-default");
        

    }

    @HostListener('click') onClick() {
        console.log("The selID is" + this.selectedID);
        this.el.nativeElement.classList.add("active");

    }

}


@Directive({selector: '[myRemoveActive]'})
export class RemoveActiveDirective {
    @Input() selectedID: string;

    constructor(private el: ElementRef) {


    }

    @HostListener('click') onClick() {

        for (let i = 0; i < this.el.nativeElement.children.length; i++) {
            if (this.el.nativeElement.children[i].id != this.selectedID) {
                this.el.nativeElement.children[i].classList.remove("active");
            }


        }


    }

}
