///<reference path="../../node_modules/@angular/http/src/http.d.ts"/>
/**
 * Created by Andromeda on 3/09/2016.
 */
import {Injectable}     from '@angular/core';
import {Consultant} from "../objClass/consultant";
import {Observable} from "rxjs";
import {Http, Response, Headers, RequestOptions} from "@angular/http";

@Injectable()
export class AuthProvider {
    constructor(private http: Http) {
        this.authUrl = '/api/auth';
        //console.log(this.authUrl);
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.options = new RequestOptions({headers: this.headers});

    }

    options: RequestOptions;
    headers: Headers;
    authUrl: string;
    isLoggedIn: Boolean;


    private extractData(res: Response) {
        //let body = res.json();
        console.log(res);
        return true;//res;//body || {};
    }


    LoginAttempt(consultant: Consultant, password: string): Observable<boolean> {

        let bodyString1: any;
        bodyString1 = '{"consultant":' + JSON.stringify(consultant) + ', "password":"' + password + '"}';
        console.log(this.options);
        console.log(bodyString1);
        let bodyString: any;
        bodyString = JSON.parse(bodyString1);
        console.log(bodyString);

        this.http.post(this.authUrl, JSON.stringify(bodyString), this.options).map(this.extractData).subscribe((result)=>this.isLoggedIn = result);
        return this.http.post(this.authUrl, JSON.stringify(bodyString), this.options).map(this.extractData);


    }


    Logout() {
        this.isLoggedIn = false;
    }


}