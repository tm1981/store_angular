import { Component, Input, OnInit } from '@angular/core'
import { HttpApiService } from '../services/http-api.service'
import { Product } from '../model/product'
import { CookieService } from 'ngx-cookie-service'
import { MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Product[] = []
  customer: Customer = { name: '', address: '', card: '' }
  orderComplete: boolean = false
  total: number = 0


  constructor(private httpApiService: HttpApiService, private cookieService: CookieService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.cart = this.httpApiService.getCart()
  }

  getTotal(): number {
    let total = 0
    this.cart.map(p => {
      total += (p.price * p.quantity)
    })
    return total
  }

  removeItemFromCart(id: number): void {
    var removeIndex = this.cart.map(item => item.id).indexOf(id)
    ~removeIndex && this.cart.splice(removeIndex, 1);
    this.cookieService.set('cart', JSON.stringify(this.cart))
    this.httpApiService.updateItemsInCart()
  }

  onItemUpdate() {
    this.cart = this.cart.filter(el => {
      return el.quantity !== 0
    })
    this.cookieService.set('cart', JSON.stringify(this.cart))
    this.httpApiService.updateItemsInCart()
  }

  onSubmit() {
    console.log(this.customer)
    this.orderComplete = true
    this.total = this.getTotal()
    this.cookieService.set('cart', '')
    this.httpApiService.updateItemsInCart()
  }

}

export interface Customer {
  name: string
  address: string
  card: string
}