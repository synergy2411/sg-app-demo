import { Component, OnInit, Input } from '@angular/core';
import { IUser } from '../../model/user.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent  {

  @Input('user') user : IUser;

}
