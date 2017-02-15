import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css', '../app.component.css'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductsService) { };

  getProducts() {
      return this.productService.getProducts();
  }

  ngOnInit() {
      this.getProducts();
  }

}
