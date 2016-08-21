/**
 * Created by Andromeda on 21/08/2016.
 */
import {Component, Input, OnInit} from "@angular/core";
import {Attempt} from "../objClass/attempt";
@Component({
    selector: 'attempt',
    templateUrl: 'app/marketing-item/marketing-item.component.html'
})
export class AttemptComponent implements OnInit {

    @Input()
    attempt: Attempt;

    ngOnInit() {

    }


}