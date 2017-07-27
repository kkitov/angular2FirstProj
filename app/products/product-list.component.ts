import { ProductService } from './product.service';
import { IProduct } from './product';
import {Component,OnInit} from '@angular/core';

@Component({
    
    templateUrl: 'app/products/product-list.component.html',
    styleUrls : ['app/products/product-list.component.css']
})
export class ProductListComponent implements OnInit{

    pageTitle: string = 'Product List'
    imageWidth: number= 80;
    imageMargin : number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage:string
    products: IProduct[] = [];
    constructor(private _productService: ProductService){

    }
     toogleImage(): void{
       this.showImage = !this.showImage;
    }
    ngOnInit(): void{
        this._productService.getProducts()
        .subscribe(
            products=>this.products = products,
            error =>this.errorMessage = <any>error

        )
    }
     onRatingClicked(message:string):void{
         this.pageTitle = 'Product List ' + message;
    }

    
}