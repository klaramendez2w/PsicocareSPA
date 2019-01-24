import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from '../Modelos/User';
import { Observable, from } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { throwError } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  API_URL = 'http://localhost:8080/Psicocare/api/users'
  API_URLAuth = 'http://localhost:8080/Psicocare/api/authenticate';

  id:number=0;

  constructor(private _http: HttpClient) { }

  getUserFromApi(): Observable<User[]> {
    const ApiUsers = this._http.get<User[]>(this.API_URL);
    console.log("estamos aqui!!");
    return ApiUsers;

  }

  getUserFromApiByUid(id: number): Observable<User> {
    const ApiUserUid = this._http.get<User>(`${this.API_URL}/${id}`)
    console.log(ApiUserUid);

    return ApiUserUid;

  }


  login(email: string, password: string): Observable<any> {
    const options = {
      headers: {
        username: email,
        password: password
      }
    }

    return this._http.get<any>(this.API_URLAuth, options) //Options es el objeto que creamos antes con el const
  }


  //Esto es para usar el login de internet

  // login(email: User): Observable<any>{
  //   return this._http.post(this.API_URL, email).pipe(map(
  //     (res:Response) => {
  //       return {status: res.status, result: res.json() }
  //     }
  //   ))
  // .pipe(catchError(
  //   (error: Error) => {
  //     return Observable.throw(new Error (error.message));
  //   }
  // ))

  // }

}
