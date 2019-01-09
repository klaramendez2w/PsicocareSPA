import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { ActividadesService } from '../services/actividades.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Activity } from '../Modelos/Activity';

@Component({
  selector: 'app-homeactividades',
  templateUrl: './homeactividades.component.html',
  styleUrls: ['./homeactividades.component.scss']
})
export class HomeactividadesComponent implements OnInit {
  private aid: number; 
  activities: Activity[] = null;


  constructor(private _actividadesService: ActividadesService, private _router: Router, private _route: ActivatedRoute ) { }

  ngOnInit() {
    // this._route.paramMap.subscribe(params => this.aid = +params.get('aid'));
    this._actividadesService.getActivityFromApi().subscribe(lasActividadesRecibidas => {
      this.activities = lasActividadesRecibidas;
   

    })
  }
  onClick(aid: number){
    
    
    this._router.navigate(['homeactivities/activity',aid]);
    this._actividadesService.getActivityFromApiByAid;
    console.log(aid);
    
  }
  
 
}
