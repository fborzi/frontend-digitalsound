import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './services/interceptors/product-interceptor.service';


import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { ProductComponent } from './modules/product/product.component';
import { AboutusComponent } from './modules/aboutus/aboutus.component';
import { VentaMayoristaSignUpComponent } from './modules/venta-mayorista-signup/venta-mayorista-signup.component';
import { ContactComponent } from './modules/contact/contact.component';
import { UserComponent } from './modules/user/user.component';
import { AdminComponent } from './modules/admin/admin.component';
import { CategoryComponent } from './modules/category/category.component';
import { SubcategoryComponent } from './modules/subcategory/subcategory.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VentaMayoristaLoginComponent } from './modules/venta-mayorista-login/venta-mayorista-login.component';
import { VentaMayoristaComponent } from './modules/venta-mayorista/venta-mayorista.component';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { FooterComponent } from './modules/footer/footer.component';
import { CommonModule } from '@angular/common';
import { FilteredProductComponent } from './modules/product/filtered-product/filtered-product.component';



@NgModule({
    declarations:[
    AppComponent,
    HomeComponent,
    ProductComponent,
    AboutusComponent,
    VentaMayoristaLoginComponent,
    VentaMayoristaSignUpComponent,
    ContactComponent,
    UserComponent,
    AdminComponent,
    CategoryComponent,
    SubcategoryComponent,
    VentaMayoristaComponent,
    NavbarComponent,
    FooterComponent,
    FilteredProductComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
