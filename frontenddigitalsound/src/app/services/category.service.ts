import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoryURL = environment.categoryURL;
  mainURL = environment.mainURL;

  constructor(private httpClient: HttpClient) {}

  public getCategoryList(): Observable<Category[]>{
    return this.httpClient.get<Category[]>(this.mainURL + this.categoryURL); //Chequear URL
  }

  //public lista(): Observable<Producto[]>{
  //  return this.httpClient.get<Producto[]>(this.productURL); //Chequear URL
  //}


}
