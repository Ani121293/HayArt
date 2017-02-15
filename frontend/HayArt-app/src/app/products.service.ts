import { Injectable } from '@angular/core';

import { Product } from './product';
import { PRODUCTS } from './mock-products';

@Injectable()
export class ProductsService {

  constructor() { }
  getProducts() {
    console.log("Providing products..", PRODUCTS);
    return PRODUCTS;
  }
}
