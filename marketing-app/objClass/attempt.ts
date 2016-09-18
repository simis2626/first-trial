/**
 * Created by andromeda on 19/08/2016.
 */

export class Attempt {
    constructor(public _id: string,
                public EC: string,
                public Date: string,
                public notes: string,
                public followUpRequired: boolean,
                public followUpDate: string,
                public dateAdded: string,
                public clientsReferred: string,
                public employerId: string) {
    }
}