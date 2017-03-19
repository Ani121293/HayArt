import { Component, Input } from '@angular/core';
import { ProductDetails } from '../ProductDetails'

@Component({
  selector: 'products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent {

  constructor() { }

  @Input()
  productDetail: ProductDetails;
}
