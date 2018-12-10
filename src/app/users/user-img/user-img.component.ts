import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-user-img',
  templateUrl: './user-img.component.html',
  styleUrls: ['./user-img.component.css']
})
export class UserImgComponent{

  @Input('user') user : any;
  @Input('imgpath') imgpath : any;
  @Input('title') title : string;

  moreInfo(fname: string, company: string) {
    alert(`Mr. ${fname} is working with ${company}!!!`);
  }
  

}
