import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import {ProductsModule} from './products/products.module';

const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'products', loadChildren: () => ProductsModule}
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
