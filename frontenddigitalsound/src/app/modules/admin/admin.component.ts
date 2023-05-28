import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CategoryService } from 'src/app/services/category.service';
import { SubcategoryService } from 'src/app/services/subcategory.service';
import { ProductService } from 'src/app/services/product.service';
import { Category } from 'src/app/models/category';
import { Subcategory } from 'src/app/models/subcategory';
import { Product } from 'src/app/models/product';
//import { DataServiceService } from 'src/app/services/data-service.service';
import { CategoryComponent } from '../category/category.component';
import { SubcategoryComponent } from '../subcategory/subcategory.component';
import { filter } from 'rxjs';
import { Brand } from 'src/app/models/brand';
import { Tax } from 'src/app/models/tax';
import { BrandService } from 'src/app/services/brand.service';
import { TaxService } from 'src/app/services/tax.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [CategoryService, SubcategoryService, ProductService]
})
export class AdminComponent implements OnInit {
  static module(arg0: string, arg1: never[]) {
    throw new Error('Method not implemented.');
  }

  formularioProducto!: FormGroup;
  //public selectedCategory: Category = { id: 0, name: '' };
  categories: Category[] = [];
  subcategories: Subcategory[] = [];
  brands: Brand[] = [];
  taxes: Tax[] = [];
  errorMessage: string = "";



  constructor(private fb: FormBuilder,
    private productService: ProductService,
    private categoryService: CategoryService,
    private subcategoryService: SubcategoryService,
    private brandService: BrandService,
    private taxService: TaxService,
  ) { }

  ngOnInit(): void {
    this.formularioProducto = this.fb.group({
      code: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      brand: new FormControl('', [Validators.required]),
      model: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      image1: new FormControl(),
      price: new FormControl('', [Validators.required]),
      cost: new FormControl('', [Validators.required]),
      tax: new FormControl('', [Validators.required]),
      stock: new FormControl('', [Validators.required]),
      isActive: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      subcategory: new FormControl('', [Validators.required]),
    });

    this.getCategories();
    this.getSubcategories();
    this.getBrands();
    this.getTaxes();

  }


  onSave() {
    console.log(this.formularioProducto.value);
  }

  public getCategories() {
    this.categoryService.getCategoryList().subscribe(
      (res) => { this.categories = res.sort((a, b) => a.name.localeCompare(b.name)); },
      error => { this.errorMessage = error.error.message; }
    )
  }
  public getSubcategories() {
    this.subcategoryService.getSubcategoryList().subscribe(
      (res) => { this.subcategories = res.sort((a, b) => a.name.localeCompare(b.name)); },
      error => { this.errorMessage = error.error.message; }
    )
  }

  public getSubcategoriesByCategoryId(id: number) {
    this.subcategoryService.getSubcategoryListByCategoryId(id).subscribe(
      (res) => { this.subcategories = res; }
    )
  }

  public getBrands() {
    this.brandService.getBrandList().subscribe(
      (res) => { this.brands = res.sort((a, b) => a.name.localeCompare(b.name))},
      error => { this.errorMessage = error.error.message; }
    )
  }

  public getTaxes() {
    this.taxService.getTaxList().subscribe(
      (res) => { this.taxes = res },
      error => { this.errorMessage = error.error.message; }
    )
  }

  onSelect(id: number): void {
    this.subcategories = this.subcategories.filter(subcategory => subcategory.category.id == id)
  }


}
