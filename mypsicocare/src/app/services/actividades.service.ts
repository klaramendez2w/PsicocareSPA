import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Activity } from '../Modelos/Activity';
import { Observable, BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ActividadesService {

  API_URL='http://localhost:8080/Psicocare/api/activities';
 
  constructor (private _http:HttpClient) { }
 

  getActivityFromApi():Observable<Activity[]>{
    const ApiActivities  = this._http.get<Activity[]>(this.API_URL);
    console.log("estamos aqui!!");
    return ApiActivities;
    
  }

 
  getActivityFromApiByAid(aid: number):Observable<Activity>{
    const ApiActivityAid = this._http.get<Activity>(`${this.API_URL}/${aid}`)
    console.log(ApiActivityAid);
    
   return ApiActivityAid;

  }
}