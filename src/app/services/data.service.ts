import { AuthService } from './auth.service';
import { USER_DATA } from './../model/mocks';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import "rxjs/add/operator/map";
import { IUser } from '../model/user.model';

@Injectable()
export class DataService {

    constructor(private http: Http,
        private httpClient: HttpClient,
        private authService: AuthService) { }

    counter: number = 1;

    getUserData() {
        return USER_DATA;
    }

    getHttpUserData() {
        return this.http.get("assets/data/user-data.json")
            .map(response => <IUser[]>response.json().userdata)
        // .subscribe(data =>{console.log(data)});
    }

    getHttpClientUserData() {
        //    return this.httpClient.get("https://my-awesome-project-cf418.firebaseio.com/userdata.json?auth="+this.authService.getToken())
        return this.httpClient.get("https://my-awesome-project-cf418.firebaseio.com/userdata.json", {
            params: new HttpParams().set("auth", this.authService.getToken())
        })

    }

}