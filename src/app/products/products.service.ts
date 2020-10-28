/** DELETE: delete the product from the server */
import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";

import {HttpHeaders} from '@angular/common/http';
import {url} from "inspector";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

httpOptions.headers = httpOptions.headers.set('Authorization', 'my-new-auth-token');

deleteProduct(id:number):Observable < {} > {
  const url = `${this.productsUrl}/${id}`; // DELETE api/products/42
  return this.http.delete(url, httpOptions)
    .pipe(
      catchError(this.handleError('deleteProduct'))
    );
}

/** PUT: update the hero on the server. Returns the updated hero upon success. */
updateProduct(product:Product): Observable <Product> {
  return this.http.put<Product>(this.productsUrl, product, httpOptions)
    .pipe(
      catchError(this.handleError('updateProduct', product))
    );
}
