import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filteredStatus : string, status : string): any {
    console.log("Transforms called");
    if(value.length == 0 || filteredStatus == ""){
      return value;
    }
    let resultArray = [];
    for(let todo of value){
      if(todo[status]===filteredStatus){
        resultArray.push(todo);
      }
    }
    return resultArray;
  }

}
