/**
 * Created by andromeda on 19/08/2016.
 */

import {Injectable} from "@angular/core";
import {Attempt} from "../objClass/attempt";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";


@Injectable()
export class AttemptProvider {

    constructor(private http: Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.options = new RequestOptions({headers: this.headers});

    }

    options: RequestOptions;
    headers: Headers;

    private attemptsUrl = '/api/attempts';
    customUrl: string;


    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }


    public getAttempts(employerID: string): Observable<Attempt[]> {

        this.customUrl = this.attemptsUrl + '/' + employerID;


        //noinspection TypeScriptUnresolvedFunction
        return this.http.get(this.customUrl).map(this.extractData);


    }

    deleteAttempt(attemptId: string): Observable<Response> {

        let delAtt = this.attemptsUrl + "/" + attemptId;
        return this.http.delete(delAtt);
    }

    newAttempt(attempt: Attempt): Observable<boolean> {


        let bodyString: any;
        bodyString = '{"attempt":' + JSON.stringify(attempt) + '}';
        bodyString = JSON.parse(bodyString);

        let singleHttpRequest = this.http.post(this.attemptsUrl, JSON.stringify(bodyString), this.options).map(this.extractData);

        return singleHttpRequest;


    }

    updateAttempt(attempt: Attempt): Observable<boolean> {


        let bodyString: any;
        bodyString = '{"attempt":' + JSON.stringify(attempt) + '}';
        bodyString = JSON.parse(bodyString);

        let singleHttpRequest = this.http.put(this.attemptsUrl, JSON.stringify(bodyString), this.options).map(this.extractData);

        return singleHttpRequest;


    }
}