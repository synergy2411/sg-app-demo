import { IUser } from "./user.model";

export const USER_DATA: IUser[] = [{
    firstName: "Bill",
    lastName: "Gates",
    income: 50000,
    dob: new Date("Dec 21, 1965"),
    isWorking: true,
    company: "Microsoft",
    image: "assets/images/bill.jpg",
    votes: 120
}, {
    firstName: "Steve",
    lastName: "Jobs",
    income: 0,
    dob: new Date("Jan 1, 1965"),
    isWorking: false,
    company: "Apple",
    image: "assets/images/steve.png",
    votes: 190
}, {
    firstName: "Tim B.",
    lastName: "Lee",
    income: 30000,
    dob: new Date("Aug 1, 1965"),
    isWorking: true,
    company: "World Wide Web",
    image: "assets/images/tim.jpg",
    votes: 130
}]