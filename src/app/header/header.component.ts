import { Component, OnInit } from '@angular/core';
import { HttpApiService } from '../services/http-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  numOfProducts: number = 0
  constructor(private httpApiService: HttpApiService) {

    this.httpApiService.getNumOfProductsCart().subscribe(items => {
      this.numOfProducts = items
    })
  }

  ngOnInit(): void {
    this.httpApiService.updateItemsInCart()
  }

}
