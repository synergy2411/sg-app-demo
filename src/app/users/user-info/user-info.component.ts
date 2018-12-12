import { Component, Input } from '@angular/core';
import { IUser } from '../../model/user.model';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
  providers : [DataService]
})
export class UserInfoComponent {

  @Input('user') user: IUser;

  constructor(public dataService : DataService){}

  increase() {
    this.dataService.counter++;
  }

  num1: number = 2;
  myStyle = {
    "color": 'blue',
    "font-size": "1.2em"
  }
  myClass = {
    'border': true,
    'feature': false
  }

  onToggle() {
    this.myClass.border = !this.myClass.border;
    this.myClass.feature = !this.myClass.feature;
  }

}
