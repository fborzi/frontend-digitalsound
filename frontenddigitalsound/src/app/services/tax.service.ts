import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tax } from '../models/tax';

@Injectable({
  providedIn: 'root'
})
export class TaxService {

  taxURL = environment.taxURL;
  mainURL = environment.mainURL;

  constructor(private httpClient: HttpClient) { }

  /*Método para obtener todos los marcas*/

  public getTaxList(): Observable<Tax[]> {
    return this.httpClient.get<Tax[]>(this.mainURL + this.taxURL); //Chequear URL
  }
}
