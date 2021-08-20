import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ProductsComponent } from './products/products.component'
import { ProductItemComponent } from './products/product-item/productItem.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatSnackBarModule} from '@angular/material/snack-bar'
import { CartComponent } from './cart/cart.component'
import { CookieService } from 'ngx-cookie-service'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatGridListModule} from '@angular/material/grid-list'
import { ProductDetailsComponent } from './products/product-details/product-details.component'
import {MatBadgeModule} from '@angular/material/badge'
import { HeaderComponent } from './header/header.component'
import { FormsModule } from '@angular/forms'
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductItemComponent,
    CartComponent,
    ProductDetailsComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatGridListModule,
    MatBadgeModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule { }
