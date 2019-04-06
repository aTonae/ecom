import { Component } from '@angular/core';
import {ProductService} from './product.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecom';


  electronicsProducts;
  myData;
    constructor(private productService: ProductService) {
    this.electronicsProducts = productService.getdata();


    }

    ngOnInit() {
      this.productService.getRemoteUsers().subscribe(data=> {
        console.log(data);
        this.myData = data;
      });
       console.log(this.myData);
    }


}
