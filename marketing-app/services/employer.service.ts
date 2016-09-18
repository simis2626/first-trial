/**
 * Created by Andromeda on 19/08/2016.
 */
import {Injectable, EventEmitter, Output} from "@angular/core";
import {Employer} from "../objClass/employer";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

@Injectable()
export class EmployerProvider {

    constructor(private http: Http) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.options = new RequestOptions({headers: this.headers});

    }

    options: RequestOptions;
    headers: Headers;

    @Output() selectedEmployerChanged = new EventEmitter();


    private employersUrl = '/api/employers';

    private selectedEmployer = new Subject<Employer>();
    private selectedEmployer2: Employer;
    selectedEmployer$ = this.selectedEmployer.asObservable();


    private extractData(res: Response) {
        let body = res.json();
        console.log(body);
        return body || {};
    }


    public getEmployers(): Observable<Employer[]> {

        //noinspection TypeScriptUnresolvedFunction
        return this.http.get(this.employersUrl).map(this.extractData);


    }

    setSelectedEmployer(employer: Employer) {
        this.selectedEmployer.next(employer);
        this.selectedEmployer2 = employer;
    }

    getSelectedEmployer() {
        return this.selectedEmployer2;
    }

    deleteEmployer(employerId: string): Observable<Response> {

        console.log("deleted");
        let delEmp = this.employersUrl + "/" + employerId;
        console.log(delEmp);
        return this.http.delete(delEmp);
    }

    newEmployer(employer: Employer): Observable<boolean> {


        let bodyString: any;
        bodyString = employer.toString();


        let singleHttpRequest = this.http.post(this.employersUrl, JSON.stringify(bodyString), this.options).map(this.extractData);

        return singleHttpRequest;


    }




}
