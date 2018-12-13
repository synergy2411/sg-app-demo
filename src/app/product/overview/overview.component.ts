import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  product_id : number; 
  productName : string;
  category : string;

  constructor( private route : ActivatedRoute ) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.category = params['category'];
    })

    this.route.params.subscribe(params =>{
      console.log(params);
      this.productName = params['name'];
    })
    
    this.product_id = +this.route.snapshot.params['id'];
    console.log(this.route.snapshot.params['id']);
  }

}
