import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  brandURL = environment.brandURL; 
  mainURL = environment.mainURL;

  constructor(private httpClient: HttpClient) { }

  /*Método para obtener todos los marcas*/

  public getBrandList(): Observable<Brand[]>{
    return this.httpClient.get<Brand[]>(this.mainURL + this.brandURL); //Chequear URL
  }

}