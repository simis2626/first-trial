/**
 * Created by Andromeda on 19/08/2016.
 */
import {Injectable} from '@angular/core';
import {Employer} from 'marketing-app/objClass/employer';

@Injectable()
export class EmployerProvider {

    private employer1: Employer = {
        _id: 1,
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

        _id: 2,
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

    public getEmployers() {
        return Promise.resolve(this.employers);


    }


}