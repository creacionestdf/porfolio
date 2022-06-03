import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title: string = 'Formulario de Login';

  public formLogin: FormGroup;
  private eemail: string = 'r';
  private ppassword: string = 'a';

  constructor(private formBuilder: FormBuilder,private authService: AuthService){
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required, Validators.minLength(8)]
    })
  }

  ngOnInit(): void {}

  Entrar(): any {
    //console.log(this.formLogin.value);

    //El servicio authService.login ya redirecciona
    //en caso de inicio de sesion positivo
    this.authService.login(this.eemail, this.ppassword);
  }

}
