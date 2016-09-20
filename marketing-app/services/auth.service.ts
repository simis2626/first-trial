///<reference path="../../node_modules/@angular/http/src/http.d.ts"/>
/**
 * Created by Andromeda on 3/09/2016.
 */
import {Injectable} from "@angular/core";
import {Consultant} from "../objClass/consultant";
import {Observable} from "rxjs";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {authResponse} from "../objClass/authResponse";

@Injectable()
export class AuthProvider {
    constructor(private http: Http) {
        this.authUrl = '/api/auth';
        //console.log(this.authUrl);
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.options = new RequestOptions({headers: this.headers});
        this.authToken = localStorage.getItem("authToken");

    }

    authToken: string;
    options: RequestOptions;
    headers: Headers;
    authUrl: string;
    isLoggedIn: boolean = false;
    private _preloggedInUser: string;


    private extractData(res: Response) {
        let body = res.json();

        return body;//res;//body || {};
    }


    checkToken(): Promise<boolean> {
        return new Promise<boolean>((resolve)=> {


            if (this.authToken) {
        let bodyString1: any;
                bodyString1 = '{"authToken":"' + this.authToken + '"}';

        let bodyString: any;
        bodyString = JSON.parse(bodyString1);

                let singleHttpRequest = this.http.post(this.authUrl + "/token", JSON.stringify(bodyString), this.options).map(this.extractData)
                    .subscribe((data: authResponse)=> {
                            this._preloggedInUser = data.consultantId;
                            this.isLoggedIn = data.SuccessfulAuth;
                            resolve(this.isLoggedIn);


                        }
                    );
            } else {

                resolve(this.isLoggedIn);
            }

        });
    }


    LoginAttempt(consultant: Consultant, password: string, rememberMe: boolean): Observable<authResponse> {

        let bodyString1: any;
        bodyString1 = '{"consultant":' + JSON.stringify(consultant) + ', "password":"' + password + '", "rememberMe":' + rememberMe + '}';

        let bodyString: any;
        bodyString = JSON.parse(bodyString1);


        let singleHttpRequest = this.http.post(this.authUrl, JSON.stringify(bodyString), this.options).map(this.extractData);
        setTimeout(()=> {

            singleHttpRequest.subscribe((data: authResponse)=> {


                    this.isLoggedIn = data.SuccessfulAuth;
                    if (rememberMe && this.isLoggedIn) {
                        this.authToken = data.authToken;
                        localStorage.setItem("authToken", this.authToken);

                    }


                }
            );








        }, 300);
        return singleHttpRequest;


    }


    get preloggedInUser(): string {
        return this._preloggedInUser;
    }

    Logout() {
        this.authToken = null;
        this.isLoggedIn = false;
        localStorage.removeItem("authToken");

    }


}