import {NgModule} from '@angular/core';
import {ProductsComponent} from './products/products.component';
import {ProductsRoutingModule} from './products-routing.module';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [ProductsRoutingModule, CommonModule],
  declarations: [ProductsComponent]
})
export class ProductsModule {
}
