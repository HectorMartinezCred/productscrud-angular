import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './product/add-product/add-product.component';
import { DetailProductComponent } from './product/detail-product/detail-product.component';
import { DetailnameProductComponent } from './product/detailname-product/detailname-product.component';
import { ListProductComponent } from './product/list-product/list-product.component';
import { UpdateProductComponent } from './product/update-product/update-product.component';

const routes: Routes = [
  {path: '', component: ListProductComponent},
  {path: 'detail/:id', component: DetailProductComponent},
  {path: 'detailname/:name', component: DetailnameProductComponent},
  {path: 'add', component: AddProductComponent},
  {path: 'update/:id', component: UpdateProductComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
