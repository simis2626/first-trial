/**
 * Created by andromeda on 19/08/2016.
 */

export class Attempt {
    constructor(public EC: string,
                public notes: string,
                public followUpRequired: boolean,
                public dateAdded: Date,
                public clientsReferred: string[],
                public employerId: string,
                public _id?: string,
                public followUpDate?: Date) {
    }
}