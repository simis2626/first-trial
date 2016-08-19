/**
 * Created by Andromeda on 19/08/2016.
 */
import {Injectable} from '@angular/core';
import {Employer} from '../objClass/employer';
import {Http, Response} from '@angular/http';
import {Observable}     from 'rxjs/Observable';


@Injectable()
export class EmployerProvider {

    constructor(private http: Http) {
    }

    private employersUrl = '/api/employers';



    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }


    public getEmployers(): Observable<Employer[]> {

        //noinspection TypeScriptUnresolvedFunction
        return this.http.get(this.employersUrl).map(this.extractData);


    }


}