import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpApiService } from 'src/app/services/http-api.service';
import { Product } from 'src/app/model/product';
import { HelpersService } from 'src/app/services/helpers.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product = {
    id: 0,
    name: '',
    description: '',
    url: '',
    price: 0,
    quantity: 0
  }
  quantity: number = 0;

  constructor(private route: ActivatedRoute, private httpApiService: HttpApiService, private helpers: HelpersService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if (id != undefined) {
      const intId: number = parseInt(id)
      this.httpApiService.getProductById(intId).subscribe(product => {
        this.product = product
      })
    }
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
}
