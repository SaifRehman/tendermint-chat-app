import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/timeoutWith';
import {config} from '../config/config'
import { EnvVariables } from '../../app/environment-variables/environment-variables.token';

@Injectable()
export class HomeService {
    constructor(
        private http: Http,
        @Inject(EnvVariables) public envVariables
    ){
        console.log('loggggssssssssss',envVariables.apiEndpoint)
     }
    public get(): Observable<any> {
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
            })
        });
        const link = this.envVariables.apiEndpoint+'/api/get';
        console.log(link);
        return this.http.get(link, options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }

    public getStatus(): Observable<any> {
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
            })
        });
        const link = this.envVariables.apiEndpoint+'/api/status';
        return this.http.get(link, options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }
    public post (text: string): Observable<any> {
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
            })
        });
        const link = config.baseUrl+'/api/post';
        const senderName = sessionStorage.getItem('name')
        const bodyObject = {
            sender: senderName,
            message: text
        };
        return this.http.post(link, bodyObject, options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }
}