import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css', '../app.component.css'],
  providers: [ProductsService]
})

export class ProductsComponent implements OnInit{

  errorMessage: string;
  products: Product[];
  mode = 'Observable';

  constructor(private productService: ProductsService) { };

  getProducts() {
      this.productService.getProducts()
                     .subscribe(
                       products => this.products = products,
                       error =>  this.errorMessage = <any>error);
  }

ngOnInit() {
	this.getProducts();
};
	


}
