import { HelpersService } from './../../services/helpers.service';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { HttpApiService } from '../../services/http-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './productItem.component.html',
  styleUrls: ['./productItem.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() singleProduct!: Product;
  quantity: number = 0;

  constructor(
    private httpApiService: HttpApiService,
    private router: Router,
    private helpers: HelpersService) { }

  ngOnInit(): void {
  }

  onAdd(): void {
    this.quantity = this.helpers.onAdd(this.quantity)
  }

  onSub(): void {
    this.quantity = this.helpers.onSub(this.quantity)
  }

  addToCart(product: Product): void {
    this.helpers.addToCart(product, this.quantity)
  }

  itemDetails(id: number) {
    this.router.navigate(['/product', id]);
  }

}
