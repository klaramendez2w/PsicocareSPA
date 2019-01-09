import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ActividadesService } from '../services/actividades.service';
import { Activity } from '../Modelos/Activity';
import { HomeactividadesComponent } from '../homeactividades/homeactividades.component';



@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.scss']
})
export class ActividadComponent implements OnInit {
  // @Input() currentActivity: Activity;
  activities: Activity[] = null;
 
  private _aid: number;
  
  currentActivity: Activity;
  
  // = new Activity(0,"","","","","",0)

  constructor(private _actividadesService: ActividadesService, private _router: Router, private _route:ActivatedRoute) {


  }

  ngOnInit() {
    this._route.paramMap.subscribe(params =>
      this._aid = +params.get('aid'))
    this._actividadesService.getActivityFromApiByAid(this._aid).subscribe(res => this.currentActivity = res);
    console.log(this._aid)
    console.log(this.currentActivity)
    

    // console.log(this.currentActivity)
  }
  // getActivityFromApiByAid() {
    // for (let aid = 0; aid < this.activities.length; aid++) {
    //   if (this.activities[aid] == this.currentActivity) {
    //     this._actividadesService.getActivityFromApiByAid(aid).subscribe(lasActividadesRecibidas => {
    //       this.currentActivity = lasActividadesRecibidas;

    //     })

    //   }



    //   // this.activities.filter(lasActividadesRecibidas => {
    //   //   this.currentActivity = lasActividadesRecibidas;
    //   console.log(this.currentActivity)

    // }
  // this._actividadesService.getActivityFromApiByAid;
  // }
}
