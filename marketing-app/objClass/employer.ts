/**
 * Created by Andromeda on 19/08/2016.
 */
export class Employer {
  constructor(public _id: string,
              public phoneNumber: string,
              public contactPerson: {name: string, notes: string},
              public address: string,
              public notes: string,
              public name: string,
              public doNotContact: boolean,
              public positionsNeeded: string,
              public publicTransport: boolean,
              public dateAdded: string,
              public wageSubFactsProvided: boolean) {
  }
}