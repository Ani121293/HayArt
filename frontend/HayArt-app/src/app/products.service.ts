import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Product } from './product';
import { ProductDetails } from './ProductDetails';

@Injectable()
export class ProductsService {

  private productsUrl = 'http://localhost:8081/products'; // URL sto web API
  constructor (private http: Http) {};

  private extractData(res: Response) {
    let body = res.json();
    return body || [];
  };

  private extractJsonData(res: Response) {
    let body = res.json();
    return body || {};
  }

  getProducts (): Observable<Product[]> {
    return this.http.get(this.productsUrl)
         .map(this.extractData)
         .catch(this.handleError);
  };

  getDetails (productName): Observable<ProductDetails> {
    let requestUrl = 'http://localhost:8081/details?product_name=' + productName;
    console.log(requestUrl);
    return this.http.get(requestUrl)
         .map(this.extractJsonData)
         .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  };

  ngOnInit() {};
}
