import { Component } from '@angular/core';

@Component({
    selector: 'app-users',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UsersComponent {
    title: string = "Hello World!";

    // moreInfo(fname: string, company: string) {
    //     alert(`Mr. ${fname} is working with ${company}!!!`);
    // }

    user = {
        firstName: "Bill",
        lastName: "Gates",
        income: 50000,
        dob: new Date("Dec 21, 1965"),
        isWorking: true,
        company: "Microsoft",
        image: "assets/images/bill.jpg",
        votes: 120
    }
}