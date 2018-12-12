import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent  {

  obsData = Observable.create((observer)=>{
    setTimeout(()=>{
      observer.next("First Package!")
    }, 1000);
    setTimeout(()=>{
      observer.next("Second Package!")
    }, 2000);
    setTimeout(()=>{
      observer.next("Third Package!")
    }, 4000);
    setTimeout(()=>{
      observer.next("Forth Package!")
    }, 6000);
    setTimeout(()=>{
      observer.error("Error Occured!");
    }, 7000);
    setTimeout(()=>{
      observer.next("Fifth Package!")
    }, 8000);
  });

  data : any;
  unSubs : any;

  onSubscribe(){
   this.unSubs = this.obsData.subscribe(
      data => this.data = data,
      err=>console.log(err),
      ()=>{console.log("COMPLETED")});
  }

  onUnsubscribe(){
    this.unSubs.unsubscribe();
  }
}
