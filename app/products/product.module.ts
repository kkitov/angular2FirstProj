import { ProductService } from './product.service';
import { ProductDetailGuard } from './product-guard.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './../shared/star.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild([
            {path: 'products',component:ProductListComponent},
            {path:'product/:id',canActivate : [ProductDetailGuard],component: ProductDetailComponent},


        ])


    ],
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ProductFilterPipe,
        StarComponent
    ],
    providers: [
        ProductService,
        ProductDetailGuard
    ]
})

export class ProductModule{

}