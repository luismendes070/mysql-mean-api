import { Component, OnInit, Input } from '@angular/core';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  
  @Input() product: Product;
  private route: ActivateRoute;
  private productService: ProductService;
  addMode: boolean;

  constructor(private productService:ProductService, private route:ActivateRoute) {
    
  }

  ngOnInit(): void {
    this.route.params.forEach(params: Params) => {

      this.productService.getProduct(+params['id']).subscribe((product: IProduct) => {
        this.product = product;
      })
      this.addMode = false;
    } 
  }
  
}
