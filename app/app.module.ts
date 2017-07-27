import { ProductModule } from './products/product.module';
import { ProductDetailGuard } from './products/product-guard.service';
import { WelcomeComponent } from './home/welcome.component';


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';


import {HttpModule} from '@angular/http'
import {RouterModule} from '@angular/router'



@NgModule({
  imports: [ BrowserModule ,HttpModule
    ,RouterModule.forRoot([
      {path:'welcome',component:WelcomeComponent},
      {path: '',redirectTo:'welcome',pathMatch: 'full'},
      {path: '**',redirectTo:'welcome',pathMatch: 'full'}
     
      
    ]),ProductModule
  ],
  declarations: [ AppComponent,WelcomeComponent],

  bootstrap: [ AppComponent ]
})
export class AppModule { }
