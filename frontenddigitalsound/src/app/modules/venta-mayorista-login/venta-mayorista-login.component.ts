import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/models/userlogin';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TokenService } from 'src/app/services/token.service';
//import Swal from 'sweetalert2';

@Component({
  selector: 'app-venta-mayorista-login',
  templateUrl: './venta-mayorista-login.component.html',
  styleUrls: ['./venta-mayorista-login.component.css']
})
export class VentaMayoristaLoginComponent implements OnInit {

  formularioLogin!: FormGroup;
  //isLogged: boolean = false;
  //isLoginFail: boolean = false;
  userLogin!: UserLogin;
  username: string = "";
  password: string = "";
  //roles: string[] = [];
  errorMessage: string = "";
  isAdmin: boolean = false;

  constructor(
    public formbuilder: FormBuilder,
    private tokenService: TokenService,
    private authService: AuthenticationService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.formularioLogin = this.formbuilder.group({
      password: new FormControl ('', [Validators.required, Validators.minLength(4)]), //modificar a 6
      username: new FormControl ('', [Validators.required]),
    });

  }

  onLogin(){
    this.userLogin = new UserLogin(
      this.formularioLogin.value.username, 
      this.formularioLogin.value.password);

    this.authService.login(this.userLogin).subscribe(
      data => {
        //this.isLogged = true;
        //this.isLoginFail = false;

        this.tokenService.setToken(data.token);
        this.isAdmin = this.tokenService.isAdmin();
        //this.tokenService.setUserName(data.username);
        //this.tokenService.setAuthorities(data.authorities);
        //this.roles = data.authorities;

        /*Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Bienvenido ' + this.tokenService.getUserName(),// + data.username,
          showConfirmButton: false,
          timer: 1000
        })*/

        this.router.navigate(['/ventamayorista']);
      },
      err => {
        // this.isLogged = false;
        // this.isLoginFail = true;
        this.errorMessage = err.error.message;
        /*Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: this.errorMessage,
          showConfirmButton: false,
          timer: 1500
        })*/
        
        //console.log(this.errorMessage);
      });

    //console.log(this.formularioLogin.value);
  }


}
