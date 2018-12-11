import { Component, OnInit, Input } from '@angular/core';
import { IUser } from '../../model/user.model';
import { getParentRenderElement } from '@angular/core/src/view/util';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent  {

  @Input('user') user : IUser;

  num1 : number = 2;
  myStyle = {
    "color" : 'blue',
    "font-size" : "1.2em"
  }
  myClass = {
    'border' : true, 
    'feature' : false
  }

  onToggle(){
    this.myClass.border = !this.myClass.border;
    this.myClass.feature = !this.myClass.feature;
  }

}
