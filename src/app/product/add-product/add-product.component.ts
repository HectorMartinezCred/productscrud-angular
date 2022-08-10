import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  name: string = '';
  price: number = null;

  constructor(
    private productService: ProductService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const product = new Product(this.name, this.price);
    this.productService.save(product).subscribe(
      data => {
        this.toastr.success('Product Created', 'OK', {
          timeOut: 3000,
          progressBar: true
        });
        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,
          progressBar: true
        });
        this.router.navigate(['/']);
      }
    )
  }

}
