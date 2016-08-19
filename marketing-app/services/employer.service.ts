/**
 * Created by Andromeda on 19/08/2016.
 */
import {Injectable} from '@angular/core';
import {Employer} from '../objClass/employer';
import {Http, Response} from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class EmployerProvider {

    constructor(private http: Http) {
    }

    private employersUrl = '/api/employers';





    private employer1: Employer = {
        _id: "1",
        phoneNumber: "0359414367",
        contactPerson: {name: "Simon", notes: "Don't Call on Sunday"},
        address: "123 Wilmont Place",
        notes: "They like dessies",
        name: "burgers galore",
        doNotContact: true,
        positionsNeeded: "Sausages",
        publicTransport: true,
        dateAdded: "Date",
        wageSubFactsProvided: false

    };
    private employer2: Employer = {

        _id: "2",
        phoneNumber: "0359414367",
        contactPerson: {name: "Simon", notes: "Don't Call on Sunday"},
        address: "123 Wilmont Place",
        notes: "They like dessies",
        name: "burgers galore",
        doNotContact: true,
        positionsNeeded: "Sausages",
        publicTransport: true,
        dateAdded: "Date",
        wageSubFactsProvided: false
    };


    private employers = [
        this.employer1,
        this.employer2
    ];

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }


    public getEmployers(): Observable<Employer[]> {

        return this.http.get(this.employersUrl).map(this.extractData);


    }


}