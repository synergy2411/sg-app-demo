import { USER_DATA } from './../model/mocks';
import { Component, OnInit } from '@angular/core';
import { IUser } from '../model/user.model';

@Component({
    selector: 'app-users',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UsersComponent implements OnInit{
    title: string = "Hello World!";
    users: IUser[];

    constructor() {}
    
    ngOnInit() {
        this.users = USER_DATA;
    }
    moreInfo(user: IUser) {
        alert(`Mr. ${user.firstName} is working with ${user.company}!!!`);
    }


}