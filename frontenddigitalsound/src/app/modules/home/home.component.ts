import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { Router } from '@angular/router';
import { FilteredProductComponent } from '../product/filtered-product/filtered-product.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [FilteredProductComponent],
  template: `<app-filtered-product>[message] = "filteredProductsByCategory"</app-filtered-product>`
})
export class HomeComponent implements OnInit {

  filteredProductsByCategory: Product[] = [];
  

  constructor(private productService: ProductService,
              private filteredProductsComponent:  FilteredProductComponent,
              private router: Router) { }

  ngOnInit(): void {
  }

  //TODO REVISAR ESTO
  getAlmacenamiento(){
    //var id: number = 1;
    this.productService.productList().subscribe(
      (res) => (this.filteredProductsByCategory = res.filter(product => product.category.id == 1))
    )
    //this.router.navigate(['/filteredProducts']).then.call(this.filteredProductsComponent?.getProducts(id));
    //console.log(this.filteredProductsByCategory);
  }

}
