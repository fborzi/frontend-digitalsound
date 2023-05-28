import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TokenService } from 'src/app/services/token.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-venta-mayorista-signup',
  templateUrl: './venta-mayorista-signup.component.html',
  styleUrls: ['./venta-mayorista-signup.component.css']
})
export class VentaMayoristaSignUpComponent implements OnInit {

  formularioSignUp!: FormGroup;
  isRegistered: boolean = false;
  isRegisteredFail: boolean = false;
  newUser!: User;
  
  // name: String = "";
  // lastname: String = "";
  // dni: String = "";
  // business: String = "";
  // username: String = "";
  // password: String = "";
  //roles: String[] = [];

  errorMessage : string = "";

  //newUser: any;
  
  

  constructor(
    private formbuilder: FormBuilder,
    private tokenService: TokenService,
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formularioSignUp = this.formbuilder.group({
      name: new FormControl ('', [Validators.required, Validators.minLength(3)]),
      lastname: new FormControl ('', [Validators.required, Validators.minLength(3)]),
      dni: new FormControl ('', [Validators.required, Validators.minLength(8), Validators.maxLength(11)]),
      business: new FormControl ('', [Validators.required]),
      username: new FormControl ('', [Validators.required]),
      password: new FormControl ('', [Validators.required, Validators.minLength(6)]),
      //repeatPassword: ['', [Validators.required, Validators.minLength(6)]]      
    })

  }

  onRegister(){
    var user = new User();

    user.name = this.formularioSignUp.value.name;
    user.lastname = this.formularioSignUp.value.lastname;
    user.dni = this.formularioSignUp.value.dni;
    user.business = this.formularioSignUp.value.business;
    user.username = this.formularioSignUp.value.username;
    user.password = this.formularioSignUp.value.password;

    // const newUser : Usuario =
    // {
    //   "username": user.username,
    //   "name": user.name,
    //   "lastName": user.lastname,
    //   "password": "123456",
    //   "business": "Bridgeston",
    //   "dni": "44265488"
    // } 

    this.authService.register(user).subscribe(
      respuesta => {
        // this.isRegistered = true;
        // this.isRegisteredFail = false;
        this.router.navigate(['/ventamayoristalogin']);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Cuenta creada con éxito',
          showConfirmButton: false,
          timer: 1500
        })
      },        
        error => {
          // this.isRegistered = false;
          // this.isRegisteredFail = true;
          // this.errorMessage = error.error.message;
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: error.error.message, //this.errorMessage,
            showConfirmButton: false,
            timer: 1500
          })
        }
      );

  }
}
