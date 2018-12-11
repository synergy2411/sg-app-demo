import { USER_DATA } from './../model/mocks';
import { Component } from '@angular/core';
import { IUser } from '../model/user.model';

@Component({
    selector: 'app-users',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UsersComponent {
    title: string = "Hello World!";
    user : IUser;

    constructor(){
        this.user = USER_DATA;
    }

    moreInfo(user : IUser) {
        alert(`Mr. ${user.firstName} is working with ${user.company}!!!`);
    }

   
}