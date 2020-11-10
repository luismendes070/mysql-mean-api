import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { ProductService } from './shared/product.service'

@Injectable()
export class ProductResolver implements Resolve<any> {

    constructor(private productService: ProductService) {
        
    }

    resolve() {
        return this.productService.getProduct();
    }

}