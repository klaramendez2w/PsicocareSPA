import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { ActividadesService } from '../services/actividades.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Activity } from '../Modelos/Activity';
import { UsuarioService } from '../services/usuario.service';
import { User } from '../Modelos/User';

@Component({
  selector: 'app-homeactividades',
  templateUrl: './homeactividades.component.html',
  styleUrls: ['./homeactividades.component.scss']
})
export class HomeactividadesComponent implements OnInit {
  private aid: number;
  activities: Activity[] = null;
  // currentActivity: Activity;
  private _id: number;
  currentUser: User;

  constructor(private _actividadesService: ActividadesService, private _router: Router, private _route: ActivatedRoute, private _usuariosServices: UsuarioService) { }

  ngOnInit() {
    // this._route.paramMap.subscribe(params => this.aid = +params.get('aid'));
    this._actividadesService.getActivityFromApi().subscribe(lasActividadesRecibidas => {
      this.activities = lasActividadesRecibidas;
      
    if (!localStorage.getItem('token')) {
      this._router.navigate(['/login'])
    }
    
    })
    //  this._usuariosServices.getUserFromApiByUid(this._id).subscribe(res => this.currentUser = res);
    this._route.paramMap.subscribe(params =>
      this._id = params['id']);
    console.log(this._id)
  }
  onClick(aid: number) {
    this._actividadesService.getActivityFromApiByAid(aid).subscribe(res => {
      // this.currentActivity = res
      this._router.navigate(['homeactivities/activity', aid]);
    }
    );
    console.log(aid);

  }


}
