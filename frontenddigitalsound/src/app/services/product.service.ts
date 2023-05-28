import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

/*Para inyectar un servicio en cualquier componente,
  es como una clase/componente padre que lo podes llamar de cualquier lado */

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  /*URL base de servicio a llamar - Direccion de API REST*/
  productURL = environment.productURL; 
  mainURL = environment.mainURL;
 
  /*Angular tiene un marco de inyección de dependencia, HttpClient es el inyectable */
  constructor(private httpClient: HttpClient) { }

  /*Método para obtener todos los productos*/

  public productList(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.mainURL + this.productURL); //Chequear URL
  }

  public productBySubcategory(id: number): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.mainURL + this.productURL + `/sub-cagetory/${id}`); //Chequear URL
  }

  /*Método para obtener un producto por id*/

  public productDetail(id: number): Observable<Product>{
    return this.httpClient.get<Product>(this.mainURL + this.productURL + `/details/${id}`); //Chequear URL
  }

  /*Método para obtener un producto por nombre*/
  
  public productDetailModel(model: string): Observable<Product>{
    return this.httpClient.get<Product>(this.mainURL + this.productURL + `/details/${model}`); //Chequear URL
  }

  /*Método para crear un producto*/

  public saveProduct(product: Product): Observable<Product>{
    return this.httpClient.post<Product>(this.mainURL + this.productURL + '/create', product); //Chequear URL
  }

  /*Método para actualizar un producto*/

  public updateProduct(id: number, product: Product): Observable<Product>{
    return this.httpClient.put<Product>(this.mainURL + this.productURL + `/update/${id}`, product); //Chequear URL
  }

  /*Método para eliminar un producto*/

  public deleteProduct(id: number): Observable<Product>{ 
    return this.httpClient.delete<Product>(this.mainURL + this.productURL + `/delete/${id}`); //Chequear URL
  }

}
