import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void{
    this.productService.list().subscribe(
      data => {
        this.products = data;
      },
      err => {
        console.log(err);
      }
    )
  }

  delete(id: number) {
    this.productService.delete(id).subscribe(
      data => {
        this.toastr.success("Product " + id + " is deleted", "OK", {
          timeOut: 3000,
          progressBar: true
        });
        this.loadProducts();
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,
          progressBar: true
        });
      }
    )
  }

}
