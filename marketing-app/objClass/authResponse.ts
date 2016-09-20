/**
 * Created by Andromeda on 20/09/2016.
 */
export class authResponse {
    constructor(public SuccessfulAuth: boolean,
                public authToken: string,
                public consultantId: string) {
    }
}