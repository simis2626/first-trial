/**
 * Created by andromeda on 19/08/2016.
 */

import {Injectable} from '@angular/core';
import {Consultant} from '../objClass/consultant';
import {Http, Response} from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';


@Injectable()
export class ConsultantProvider {

    constructor(private http: Http) {
    }


    private selectedConsultant = new Subject<Consultant>();
    selectedConsultant$ = this.selectedConsultant.asObservable();


    private consultantsUrl = '/api/consultants';


    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }


    public getConsultants(): Observable<Consultant[]> {




        //noinspection TypeScriptUnresolvedFunction
        return this.http.get(this.consultantsUrl).map(this.extractData);


    }


}