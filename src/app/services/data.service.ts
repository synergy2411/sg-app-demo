import { USER_DATA } from './../model/mocks';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";
import { IUser } from '../model/user.model';

@Injectable()
export class DataService{

    constructor(private http : Http){}

    counter : number = 0;

    getUserData(){
        return USER_DATA;
    }

    getHttpUserData(){
        return this.http.get("assets/data/user-data.json")
            .map( response => <IUser[]> response.json().userdata)
            // .subscribe(data =>{console.log(data)});
    }
}