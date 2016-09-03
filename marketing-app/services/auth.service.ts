/**
 * Created by Andromeda on 3/09/2016.
 */
import {Injectable}     from '@angular/core';
import {Consultant} from "../objClass/consultant";
import {Observable} from "rxjs";
import {Http, Response, RequestOptions} from "@angular/http";

@Injectable()
export class AuthProvider {
    constructor(private http: Http) {
        this.authUrl = '/api/auth';
        this.isLoggedIn = true;
        console.log(this.authUrl);
    }

    authUrl: string;
    isLoggedIn: Boolean;


    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }


    LoginAttempt(consultant: Consultant, password: string): Observable<boolean> {
        let bodyString: string;
        bodyString = '{"consultant":"' + JSON.stringify(consultant) + '","password":"' + password + '"}';
        let headers = new RequestOptions;

        headers.headers.append('Content-Type', 'application/json');

        this.http.post(this.authUrl, bodyString, headers).map(this.extractData).subscribe((result)=>this.isLoggedIn = result);
        return this.http.post(this.authUrl, bodyString, headers).map(this.extractData);


    }


    Logout() {
        this.isLoggedIn = false;
    }


}