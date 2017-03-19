import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { ProductDetails } from '../ProductDetails';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css', '../app.component.css'],
  providers: [ProductsService]
})

export class ProductsComponent implements OnInit{

  errorMessage: string;
  products: Product[];
  //currentProduct: Product;
  mode = 'Observable';
  product: ProductDetails;

  constructor(private productService: ProductsService) {
      productService.getProducts()
                     .subscribe(
                       products => {
                          this.products = products;
                       },
                       error =>  this.errorMessage = <any>error);

  };

  showDetails(productName) {
      this.productService.getDetails(productName)
                     .subscribe(
                        product => {
                           this.product = product;                     
                           console.log("Current product :", this.product);
                        },
                        error  => this.errorMessage = <any>error);
  }

  ngOnInit() {};

}
