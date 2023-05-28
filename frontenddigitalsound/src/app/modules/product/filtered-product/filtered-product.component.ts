import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-filtered-product',
  templateUrl: './filtered-product.component.html',
  styleUrls: ['./filtered-product.component.css'],
  template: `{{filteredProductsByCategory}}`
})
export class FilteredProductComponent implements OnInit {

  //filteredProducts: Product[] = [];

  @Input() filteredProductsByCategory: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    //this.getProducts(2);
  }

  /*getProducts(id: number){
    this.productService.productList().subscribe(
      (res) => (this.filteredProducts = res.filter(product => product.category.id == id))
    )
  }*/


}
