/**
 * Created by Andromeda on 21/08/2016.
 */
import {Component, Input, OnInit, EventEmitter, Output} from "@angular/core";
import {Attempt} from "../objClass/attempt";
import {AttemptProvider} from "../services/attempt.service";
import {Response} from "@angular/http";


@Component({
    selector: 'attempt',
    templateUrl: 'app/marketing-item/marketing-item.component.html'
})
export class AttemptComponent implements OnInit {
    private initcheck: boolean;
    private deleteWidth: number;
    public deletePercent: string;

    constructor(public attemptProvider: AttemptProvider) {


    };
    @Input()
    attempt: Attempt;
    deleting: boolean;
    @Output() attemptDeleted = new EventEmitter();
    @Output() applyMoveClass = new EventEmitter();
    ngOnInit() {
        this.deleteWidth = 2;
    }

    deleteAttempt() {
        let timer2;
        this.deleting = true;
        setTimeout(()=> {
            let robert: Response;
            this.attemptProvider.deleteAttempt(this.attempt._id).subscribe((outcome)=> {
                robert = outcome;
                if (robert.status == 200) {
                    this.attemptDeleted.emit(this.attempt._id);
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
                    this.applyMoveClass.emit(this.attempt._id);
                    this.initcheck = true;
                }
            }
        }, 260)


    }

}