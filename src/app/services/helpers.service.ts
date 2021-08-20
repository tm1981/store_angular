import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpApiService } from './http-api.service';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {

  constructor(private httpApiService: HttpApiService, private _snackBar: MatSnackBar) { }

  onAdd(quantity: number): number {
    quantity++;
    return quantity
  }

  onSub(quantity: number): number {
    if (quantity > 0) {
      quantity--
      return quantity
    } else {
      return 0
    }
  }

  addToCart(product: Product, quantity: number): void {
    this.httpApiService.updateCart(product, quantity)
    console.log('added to cart')
    this.openSnackBar('Product added to Shopping cart', 'OK')
    this.httpApiService.updateItemsInCart()

  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
