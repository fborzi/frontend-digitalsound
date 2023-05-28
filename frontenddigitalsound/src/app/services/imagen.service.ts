/*import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Imagen } from '../models/imagen';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  imagenURL = environment.imagenURL;

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Imagen[]>{
    return this.httpClient.get<Imagen[]>(this.imagenURL + '/list');
  }

  public upload(imagen : File): Observable<any>{
    const formData = new FormData();

    formData.append('multipartFile', imagen);
    return this.httpClient.post<any>(this.imagenURL + '/upload', formData);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.imagenURL + `/delete/${id}`);
  }
}
*/