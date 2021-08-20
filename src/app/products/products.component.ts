import { Component, OnInit } from '@angular/core';
import { HttpApiService } from '../services/http-api.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = []

  constructor(private httpApiService: HttpApiService) { }

  ngOnInit(): void {
    this.httpApiService.getProducts().subscribe(products => {
      this.products = products
    })
  }
}
