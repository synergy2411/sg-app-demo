import { Component, OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked, 
  OnDestroy, 
  Input, 
  SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle-demo',
  templateUrl: './life-cycle-demo.component.html',
  styleUrls: ['./life-cycle-demo.component.css']
})
export class LifeCycleDemoComponent implements 
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input('title') title : string;

  constructor() {
    console.log("constructor");
    console.log("Title : ", this.title);  //?
  }

  ngOnInit() {console.log("ngOnInit");  }
  ngOnChanges(changes : SimpleChanges){console.log("ngOnChanges", changes);}
  ngDoCheck(){console.log("ngDoCheck");}
  ngAfterContentInit(){
    console.log("ngAfterContentInit");
    // alert("ngAfterContentInit");
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked");
    // alert("ngAfterContentChecked");
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit");
    // alert("ngAfterViewInit");
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked");
    // alert("ngAfterViewChecked");
  }
  ngOnDestroy(){console.log("ngOnDestroy");}

}
