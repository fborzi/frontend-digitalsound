import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtDTO } from '../models/jwtdto';
import { User } from '../models/user';
import { UserLogin } from '../models/userlogin';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authURL = environment.authURL;
  mainURL = environment.mainURL;

  constructor(private httpClient: HttpClient) { }

  public register(user: User): Observable<any> {
    return this.httpClient.post<any>(this.mainURL + this.authURL + '/new', user);
  }

  public login(userLogin: UserLogin): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.mainURL + this.authURL + '/login', userLogin);
  }

}
