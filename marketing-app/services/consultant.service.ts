/**
 * Created by andromeda on 19/08/2016.
 */

import {Injectable} from "@angular/core";
import {Consultant} from "../objClass/consultant";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";


@Injectable()
export class ConsultantProvider {

    constructor(private http: Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.options = new RequestOptions({headers: this.headers});

    }

    options: RequestOptions;
    headers: Headers;
    private unapprovedConsultants: Consultant[];

    private consultantsUrl = '/api/consultants';
    selectedConsultant: Consultant;

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    newConsultant(attempt: Consultant) {


        let bodyString: any;
        bodyString = '{"consultant":' + JSON.stringify(attempt) + '}';
        bodyString = JSON.parse(bodyString);

        let singleHttpRequest = this.http.post(this.consultantsUrl, JSON.stringify(bodyString), this.options).map(this.extractData);

        return singleHttpRequest;


    }


    newConsultantPassword(authString: string) {
        console.log(authString);
        let singleHttpRequest = this.http.put('/api/auth', authString, this.options).map(this.extractData);
        return singleHttpRequest

    }


    checkForApprovals(): Promise<number> {
        return new Promise((resolve)=> {
            this.getUnapprovedConsultants().subscribe((data)=> {
                this.unapprovedConsultants = data;
                resolve(this.unapprovedConsultants.length);

            });

        });
    }

    approveConsultant(consultantId) {
        let bodyString: any;
        bodyString = '{"consultantId":"' + consultantId + '"}';
        bodyString = JSON.parse(bodyString);

        let singleHttpRequest = this.http.put(this.consultantsUrl, JSON.stringify(bodyString), this.options).map(this.extractData).subscribe((data)=>console.log(data));

    }

    getUnapproveds(): Promise<Consultant[]> {
        return new Promise((resolve)=> {
            if (this.unapprovedConsultants) {
                resolve(this.unapprovedConsultants);
            } else {
                this.checkForApprovals().then(()=> {
                    resolve(this.unapprovedConsultants);
                });

            }


        });

    }




    public getConsultants(): Observable<Consultant[]> {
        //noinspection TypeScriptUnresolvedFunction
        return this.http.get(this.consultantsUrl).map(this.extractData);
    }

    public getUnapprovedConsultants(): Observable<Consultant[]> {
        //noinspection TypeScriptUnresolvedFunction
        return this.http.get(this.consultantsUrl + '/unapproved').map(this.extractData);
    }

}