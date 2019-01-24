import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ActividadesService } from '../services/actividades.service';
import { Activity } from '../Modelos/Activity';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.scss']
})
export class ActividadComponent implements OnInit {

  activities: Activity[] = null;
  private _aid: number;
  currentActivity: Activity;
  minutes: number;
  formattedNumber: any;
  seconds: number;
  isPaused: boolean;
  buttonLabel: string;


  constructor(private _actividadesService: ActividadesService, private _router: Router, private _route: ActivatedRoute) {


  }

  

  ngOnInit() {
    
    if (!localStorage.getItem('token')) {
      this._router.navigate(['/login'])
    }
    this._route.paramMap.subscribe(params =>
      this._aid = +params.get('aid'))
    this._actividadesService.getActivityFromApiByAid(this._aid).subscribe(res => this.currentActivity = res);
    console.log(this._aid)
    console.log("Estamos en actividad")
    console.log(this.currentActivity)
    this.resetTimer();
    setInterval(() => this.tick(), 1000);
    // console.log(this.currentActivity)
  }
  resetTimer(): void {
    this.isPaused = true;
    this.minutes = 2;
    this.seconds = 59;
    this.buttonLabel = 'Start';
  }

  private tick(): void {
    if (!this.isPaused) {
      this.buttonLabel = 'Pause';

      if (--this.seconds < 0) {
        this.seconds = 59;
        if (--this.minutes < 0) {
          this.resetTimer();
        }
      }
    }
  }

  togglePause(): void {
    this.isPaused = !this.isPaused;
    if (this.minutes < 2 || this.seconds < 59) {
      this.buttonLabel = this.isPaused ? 'Resume' : 'Pause';
    }
  }
}




