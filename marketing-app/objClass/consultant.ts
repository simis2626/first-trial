/**
 * Created by andromeda on 19/08/2016.
 */
export class Consultant {
    constructor(public userId: string,
                public name: string,
                public admin: boolean,
                public approved: boolean,
                public _id?: string) {
    }
}