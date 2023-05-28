import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogged: boolean = false;
  isAdmin: boolean = false;
  //roles: string[] = [];

  constructor(private tokenService: TokenService) {}

  ngOnInit(): void {

    this.isLogged = this.tokenService.isLogged();
    this.isAdmin = this.tokenService.isAdmin();
  }

  onLogout(){
    this.tokenService.logout();
    this.isLogged = false;
    //window.location.reload();
  }

}
