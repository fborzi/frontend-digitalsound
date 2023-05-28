import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';
import { Product } from 'src/app/models/product';

import { Category } from 'src/app/models/category';
import { Subcategory } from 'src/app/models/subcategory';
import { ProductService } from 'src/app/services/product.service';
import { CategoryService } from 'src/app/services/category.service';
import { SubcategoryService } from 'src/app/services/subcategory.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories : Category[] = [];
  subcategories : Subcategory[] = [];
  filteredProducts : Product[] = [];
  //private listadoRubros;

  constructor(private categoryService: CategoryService, 
              private subcategoryService: SubcategoryService,
              private productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
    this.getCategories();
    this.getSubcategories();
  }

  //public lista(): Observable<Producto[]>{
  //  return this.httpClient.get<Producto[]>(this.productURL); //Chequear URL
  //}

  public getCategories(){
    this.categoryService.getCategoryList().subscribe(
      (res) => {this.categories = res;},
      (error: HttpErrorResponse) => {alert(error.message);}
    )
  }

  public getSubcategories(){
    this.subcategoryService.getSubcategoryList().subscribe(
      (res) => {this.subcategories = res;},
      (error: HttpErrorResponse) => {alert(error.message);}
    )
  }

  /*public getSubrubros(){
    return this.subrubros;
  }*/

  /*onSelect(id:number): void{
    //this.subrubros = this.subrubro.getSubrubros().filter(subrubro => subrubro.category.id == id);
    //this.subrubros.filter(subrubro => subrubro.category.id == id)
    //this.subrubros = this.subrubroService.getSubrubros().filter(subrubro => subrubro.category.id == id);
    this.subcategories = this.getSubrubros().filter(subrubro => subrubro.category.id == id);
  }*/

  onSelect(id: number): void {
    this.subcategories = this.subcategories.filter(subcategory => subcategory.category.id == id)
  }

  filterProductsByCategory(id: number) {
    this.productService.productBySubcategory(id).subscribe(
      (res) => {this.filteredProducts = res;},
      (error: HttpErrorResponse) => {alert(error.message);}
    )
    this.router.navigate(['/subcategories'])
    //return this.productos;
  }

}
