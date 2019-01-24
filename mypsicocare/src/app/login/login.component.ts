import { Component, OnInit } from '@angular/core';
import { User } from '../Modelos/User';
import { UsuarioService } from '../services/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import jwt_decode from 'jwt-decode';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  currentUser: User;
  // loginForm: FormGroup;
  user = { email: "", pass: "" };
  // saveUserId: any = localStorage;
  constructor(private _usersServices: UsuarioService,
    private _router: Router,
    // private _route: ActivatedRoute,
    // private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {

    if (localStorage.getItem('token')) {
      this._router.navigate(['/homeactivities/', jwt_decode.sub])
    }

  }

  acceder() {
    this._usersServices.login(this.user.email, this.user.pass).subscribe(respuesta => {

      console.log("respuesta:", respuesta);
      if (respuesta.status_code == 200) {
        localStorage.setItem('token', respuesta.message);

        var jwt_decoded = jwt_decode(respuesta.message);
        console.log("jwt_decoded:", jwt_decoded);

        this._usersServices.id = parseInt(jwt_decoded.sub);
        this._router.navigate(['/homeactivities', jwt_decoded.sub]);
      }else{
        console.log("Errrrooorrr....", respuesta);
      }

    })
  }

}
