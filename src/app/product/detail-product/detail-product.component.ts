import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  product: Product = null;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.productService.detail(id).subscribe(
      data => {
        this.product = data;
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

  back(): void {
    this.router.navigate(['/']);
  }

}
