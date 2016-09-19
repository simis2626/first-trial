/**
 * Created by Andromeda on 19/08/2016.
 */
export class Employer {
  constructor(public phoneNumber: string,
              public contactPerson: {name: string, notes: string},
              public address: {street: string, suburb: string, postcode: number},
              public notes: string,
              public name: string,
              public doNotContact: boolean,
              public positionsNeeded: string[],
              public publicTransport: boolean,
              public dateAdded: Date,
              public wageSubFactsProvided: boolean,
              public _id?: string) {
  }
}