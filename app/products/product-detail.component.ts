import { IProduct } from './product';
import {Component} from '@angular/core';

@Component({
    templateUrl : 'app/products/product-detail.component.html'
})
export class ProductDetailComponent{
    pageTitle:string = 'Product Detail';
    product: IProduct
}
