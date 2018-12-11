import { Component, Input, EventEmitter, Output } from '@angular/core';
import { IUser } from '../../model/user.model';

@Component({
  selector: 'app-user-img',
  templateUrl: './user-img.component.html',
  styleUrls: ['./user-img.component.css']
})
export class UserImgComponent{

  @Input('user') user : IUser;
  @Input('imgpath') imgpath : any;
  @Input('title') title : string;
  @Output('childEvent') childEvent = new EventEmitter<IUser>();

  onMoreInfo(){
    this.childEvent.emit(this.user);
  }

  // moreInfo(fname: string, company: string) {
  //   alert(`Mr. ${fname} is working with ${company}!!!`);
  // }
  

}
