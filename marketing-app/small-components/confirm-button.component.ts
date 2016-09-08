/**
 * Created by Andromeda on 7/09/2016.
 */

import {Component, Output, EventEmitter} from '@angular/core';


@Component({
    styleUrls: ['app/small-components/confirm-button.css'],
    templateUrl: 'app/small-components/confirm-button.component.html',

    selector: 'confirm-button'


})
export class ConfirmButtonComponent {

    @Output() clickConfirmed = new EventEmitter();

    confirming: boolean;
    


    parentClicked() {
        this.transition(true);
    }


    cancelClicked() {
        this.transition(false);
    }


    continueClicked() {
        this.clickConfirmed.emit();

    }

    transition(selector: boolean) {
        this.confirming = selector;

    }


}
