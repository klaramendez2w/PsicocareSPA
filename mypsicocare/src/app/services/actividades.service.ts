import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Activity } from '../Modelos/Activity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {

  API_URL='http://192.168.101.185:8080/Psicocare/api/activities';
 
  constructor (private _http:HttpClient) {
  }

  getActivityFromApi():Observable<Activity[]>{
    return this._http.get<Activity[]>(this.API_URL);
  }
}