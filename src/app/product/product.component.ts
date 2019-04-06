import { Component, OnInit, Input } from '@angular/core';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() local_product;

  constructor(private productService: ProductService) {
    console.log(productService.getdata());
  }

  ngOnInit() {
  }

}
