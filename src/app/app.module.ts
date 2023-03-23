import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductService } from './Service/product.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from './Service/auth.service';
import { DeActivateGuard } from './Guards/de-activate.guard';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    EditProductComponent,
    ProductListComponent,
    ContactUsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductService,AuthService,DeActivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
