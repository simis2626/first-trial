/**
 * Created by Andromeda on 19/08/2016.
 */
export class Employer {
    _id: string;
    phoneNumber: string;
    contactPerson: {name: string; notes: string};
    address: string;
    notes: string;
    name: string;
    doNotContact: boolean;
    positionsNeeded: string;
    publicTransport: boolean;
    dateAdded: string;
    wageSubFactsProvided: boolean

}