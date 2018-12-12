import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent {

  addNewTodo(){
    this.todos.push({
      label : "New task",
      status : "pending"
    });
  }

  filteredStatus = "";

  todos = [{
    label : "Some Task",
    status : "done"
  },{
    label : "New Task",
    status : "pending"
  },{
    label : "Some Task",
    status : "done"
  },{
    label : "New Task",
    status : "pending"
  }]

  contact_no : number = 987654321;

  delayData = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Here the data comes!");
    }, 2000)
  })
}
