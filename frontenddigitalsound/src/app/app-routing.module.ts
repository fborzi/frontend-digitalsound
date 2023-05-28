import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './modules/admin/admin.component';
import { ContactComponent } from './modules/contact/contact.component';
import { HomeComponent } from './modules/home/home.component';
import { ProductComponent } from './modules/product/product.component';
import { AboutusComponent } from './modules/aboutus/aboutus.component';
import { CategoryComponent } from './modules/category/category.component';
import { SubcategoryComponent } from './modules/subcategory/subcategory.component';
import { UserComponent } from './modules/user/user.component';
import { VentaMayoristaLoginComponent } from './modules/venta-mayorista-login/venta-mayorista-login.component';
import { VentaMayoristaSignUpComponent } from './modules/venta-mayorista-signup/venta-mayorista-signup.component';
import { VentaMayoristaComponent } from './modules/venta-mayorista/venta-mayorista.component';
import { LoginGuard } from './services/guards/login.guard';
import { ProductGuardService } from './services/guards/product-guard.service';
import { FilteredProductComponent } from './modules/product/filtered-product/filtered-product.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'products', component: ProductComponent },
    { path: 'filteredProducts', component: FilteredProductComponent },
    { path: 'aboutus', component: AboutusComponent },
    { path: 'ventamayoristasignup', component: VentaMayoristaSignUpComponent, canActivate: [LoginGuard] },
    { path: 'ventamayoristalogin', component: VentaMayoristaLoginComponent, canActivate: [LoginGuard] },
    { path: 'contact', component: ContactComponent },
    { path: 'user', component: UserComponent },
    { path: 'admin', component: AdminComponent, canActivate: [ProductGuardService], data: { expectedRole: ['admin'] } },
    { path: 'categories', component: CategoryComponent },
    { path: 'subcategories', component: SubcategoryComponent },
    { path: 'ventamayorista', component: VentaMayoristaComponent, canActivate: [ProductGuardService], data: { expectedRole: ['admin', 'user'] } },
    { path: '**', redirectTo: '' , pathMatch: 'full'}
  ]
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],//
  exports: [RouterModule],

})
export class AppRoutingModule { }
export const routingComponents = [  HomeComponent,
                                    ProductComponent,
                                    FilteredProductComponent,
                                    AboutusComponent,
                                    CategoryComponent,
                                    SubcategoryComponent,
                                    UserComponent,
                                    VentaMayoristaLoginComponent,
                                    VentaMayoristaSignUpComponent,
                                    VentaMayoristaComponent,
                                    AdminComponent,
                                    ContactComponent,
                                    ProductGuardService
                                ]; 