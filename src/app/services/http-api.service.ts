import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product';
import { CookieService } from 'ngx-cookie-service';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {
  private numOfProducts = new Subject<any>()

  cart: Product[] = []
  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) { }

  getProducts(): Observable<[]> {
    return this.http.get<[]>('./assets/data.json')
  }

  updateCart(product: Product, quantity: number): void {
    const newProduct = product
    newProduct.quantity = quantity
    const cartString = this.cookieService.get('cart')
    if (cartString.length > 0) {
      let productExist = false;
      this.cart = JSON.parse(cartString)
      for (let i = 0; i < this.cart.length; i++) {
        if (this.cart[i].id === newProduct.id) {
          this.cart[i].quantity += newProduct.quantity
          productExist = true
        }
      }
      if (!productExist) {
        this.cart.push(newProduct)
      }
    } else {
      this.cart.push(newProduct)
    }
    this.cookieService.set('cart', JSON.stringify(this.cart));
  }

  getCart(): Product[] {
    const cartString = this.cookieService.get('cart')
    if (cartString.length > 0) {
      this.cart = JSON.parse(cartString)
      return this.cart
    } else {
      return []
    }

  }

  updateItemsInCart() {
    const products = this.getCart()
    this.numOfProducts.next(products.length);
  }

  getNumOfProductsCart(): Observable<any> {
    return this.numOfProducts.asObservable()
  }

  getProductById(id: number) {
    return this.http.get<[]>('./assets/data.json').pipe(
      map(products => {
        const allProducts: Product[] = products
        const product = allProducts.filter(p => p.id === id);
        return product[0]
      }))
  }
}

