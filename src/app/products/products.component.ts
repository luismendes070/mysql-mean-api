import * as http from "http";

this.productService
  .deleteProduct(product.id)
  .subscribe();


const req = http.get<Product>('/api/products');
// 0 requests made - .subscribe() not called.
req.subscribe();
// 1 request made.
req.subscribe();
// 2 requests made.
