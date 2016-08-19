/**
 * Created by andromeda on 19/08/2016.
 */

import {Injectable} from '@angular/core';
import {Attempt} from '../objClass/attempt';
import {Http, Response} from '@angular/http';
import {Observable}     from 'rxjs/Observable';


@Injectable()
export class EmployerProvider {

    constructor(private http: Http) {
    }

    private attemptsUrl = '/api/attempt';
    customUrl: string


    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }


    public getAttempts(employerID: string): Observable<Attempt[]> {

        this.customUrl = this.attemptsUrl + '/' + employerID;


        return this.http.get(this.customUrl).map(this.extractData);


    }


}