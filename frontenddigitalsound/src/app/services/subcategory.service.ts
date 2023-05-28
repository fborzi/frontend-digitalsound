import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Subcategory } from '../models/subcategory';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {
  
  subcategoryURL = environment.subcategoryURL;
  mainURL = environment.mainURL;

  constructor(private httpClient: HttpClient) { }

  public getSubcategoryList(): Observable<Subcategory[]>{
    return this.httpClient.get<Subcategory[]>(this.mainURL + this.subcategoryURL); //Chequear URL
  }

  public getSubcategoryListByCategoryId(id: number): Observable<Subcategory[]>{
    return this.httpClient.get<Subcategory[]>(this.mainURL + this.subcategoryURL + `/category/${id}`);
  }
}
