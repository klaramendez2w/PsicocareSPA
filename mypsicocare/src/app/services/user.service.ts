import { Injectable } from '@angular/core';
import { User } from '../Modelos/User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URL = 'http://localhost:8080/Psicocare/api/users';


  private _id = 14;

  private _usuarios: User[] = [
   

  ];

  constructor(private _http: HttpClient) { }

  getUsuarios(): User[] {
    return this._usuarios;
  }

  getUsuarioActual(): User {
    return this._usuarios.find((aU: User) => { return aU.id == this._id; });
  }

  addUser(nuevoUsuario: User): boolean {
    nuevoUsuario.id = (new Date()).getTime();
    this._usuarios.push(nuevoUsuario);
    return true;
  }

  getUserFromAPI(): Observable<User[]> {
    return this._http.get<User[]>(this.API_URL);

  }

  /** GET: get the user from the server by id */
  getUserFromAPIById(id: number): Observable<User> {
    const ApiUserById = this._http.get<User>(`${this.API_URL}/${id}`)

    return ApiUserById;

  }



  /** UPDATE: put the user in the server */
  updateUserAPI(updateUser: User): Observable<User> {
    console.log("updateUser:",updateUser);
    
    const option = {
        headers: {
            "Content-Type": "aplication/json"

        }
    };

    const updateAEnviar = {
        id: 0,
        name: updateUser.name,
        email: updateUser.email,
        username: updateUser.username,
        password: "",

    }
 
    return this._http.put<User>(`${this.API_URL}/${updateUser.id}`, updateAEnviar);

}


 /** DELETE: delete the user from the server */
  deleteUserFromAPIById(id: number): Observable<User> {
    const ApiUserById = this._http.delete<User>(`${this.API_URL}/${id}`)

    return ApiUserById; 

  }
  

}
