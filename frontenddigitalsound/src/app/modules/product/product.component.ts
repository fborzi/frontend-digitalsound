import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Category } from 'src/app/models/category';
import { ProductService } from 'src/app/services/product.service';
import { CategoryService } from 'src/app/services/category.service';
import { SubcategoryService } from 'src/app/services/subcategory.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subcategory } from 'src/app/models/subcategory';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

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

  ngOnInit(): void {
    this.getCategories();
    this.getSubcategories();
    this.getProducts();
    //this.productos = this.productoService.getProductos();

    this.categoryForm = this.formb.group({
      category: new FormControl('', [Validators.required]),
      subcategory: new FormControl('', [Validators.required]),
    });

  }

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

  /*public getCategories(){
    return this.rubros;
  }

  public getSubcategories(){
    return this.subrubros;
  }*/

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
  }

  /*filtrarSubrubros(subrubroid: number){
    this.subrubros = this.getSubrubros().filter(subrubro => subrubro.id == subrubroid);
    console.log(this.subrubros);
  }*/

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
  }

  /*onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.productoService.listaSubrubro(id).subscribe(
      data => {
        this.productos = data;
      },
      err => {alert(err.message);}
    );}*/

}

  //private rubros2: Rubro[] = [
  //  { id: 1, name: 'Almacenamiento' },

//<img src="https://i.ibb.co/pQZh95r/exodia32gb1.jpg" alt="exodia32gb1" border="0">
//<img src="https://i.ibb.co/QkkC254/exodia32gb2.jpg" alt="exodia32gb2" border="0">
//<img src="https://i.ibb.co/GHZFLhn/exodia32gb3.jpg" alt="exodia32gb3" border="0">

