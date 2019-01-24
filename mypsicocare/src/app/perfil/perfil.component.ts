import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../Modelos/User';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})

export class PerfilComponent implements OnInit {

  private _id: number = 14;

  _usuarioActual: User = new User(0, "", "", "", "");

  constructor(private _userService: UserService, private _route: ActivatedRoute, private _router:Router) { }

  ngOnInit() {
    
    if (!localStorage.getItem('token')) {
      this._router.navigate(['/login'])
    }
    this._userService.getUserFromAPIById(this._id).subscribe(userFromAPI => {
      console.log('userFromAPI:', userFromAPI);
      this._usuarioActual = userFromAPI;
      this._id = userFromAPI.id;
    });
  }

  updateUser() {
    console.log("updateando...:", this._usuarioActual);
    this._userService.updateUserAPI(this._usuarioActual).subscribe(userRecibido => {
    this._usuarioActual = userRecibido
    });
  }


  deleteUser(id: number): void {
    this._userService.deleteUserFromAPIById(this._id).subscribe(
      data => {
        console.log('data:', data);
        this._router.navigate(['/login']);
      },
      error => { console.log('error en borrar datos:', error); }
    );
  }


}
