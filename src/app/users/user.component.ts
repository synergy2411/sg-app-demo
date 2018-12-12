import { DataService } from './../services/data.service';
// import { USER_DATA } from './../model/mocks';
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

    increase(){
        this.dataService.counter++;
    }
    constructor( public dataService : DataService) {}
    
    ngOnInit() {
        // this.users = USER_DATA;
        // this.users = this.dataService.getUserData();
        this.dataService.getHttpUserData()
            .subscribe(usersData => this.users = usersData);
    }
    moreInfo(user: IUser) {
        alert(`Mr. ${user.firstName} is working with ${user.company}!!!`);
    }


}