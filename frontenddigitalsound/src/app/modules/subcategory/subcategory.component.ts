import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { Category } from 'src/app/models/category';
import { Subcategory } from 'src/app/models/subcategory';
import { ProductService } from 'src/app/services/product.service';
import { CategoryService } from 'src/app/services/category.service';
import { SubcategoryService } from 'src/app/services/subcategory.service';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {

  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories : Category[] = [];
  subcategories: Subcategory[] = [];
  selectedSubcategories: Subcategory[] = [];
  categoryForm!: FormGroup;
  selectedSubcategory!: Object;

  constructor(private categoryService: CategoryService,
              private subcategoryService: SubcategoryService,
              private productService: ProductService,
              private formb: FormBuilder) { }

  ngOnInit(): void {}

  /*public getCategories(){
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

  public getCategories(){
    return this.rubros;
  }

  public getSubcategories(){
    return this.subrubros;
  }

  public getProducts(){
    this.productService.productList().subscribe(
      (res) => {this.products = res;},
      (error: HttpErrorResponse) => {alert(error.message);}
    )
  }
  onSelect(id:number): void{
    //this.subrubros = this.subrubro.getSubrubros().filter(subrubro => subrubro.category.id == id);
    //this.subrubros.filter(subrubro => subrubro.category.id == id)
    //this.subrubros = this.subrubroService.getSubrubros().filter(subrubro => subrubro.category.id == id);
    this.selectedSubcategories = this.subcategories.filter(subcategory => subcategory.category.id == id);
  }*/

  /*filtrarSubrubros(subrubroid: number){
    this.subrubros = this.getSubrubros().filter(subrubro => subrubro.id == subrubroid);
    console.log(this.subrubros);
  }

  filter() {
    //this.filtrarProductos(parseInt(this.categoryForm.value['subcategory']));
    this.filterProductsBySubcategory(parseInt(this.categoryForm.value['subcategory']));
    console.log(this.categoryForm.value['subcategory']);
  }

  filterProductsBySubcategory(id: number) {
    this.productService.productList().subscribe(
      (res) => {this.filteredProducts = res.filter(product => product.subcategory.id == id);},
      (error: HttpErrorResponse) => {alert(error.message);}
    )
  }*/

  /*onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.productoService.listaSubrubro(id).subscribe(
      data => {
        this.productos = data;
      },
      err => {alert(err.message);}
    );}*/


}
