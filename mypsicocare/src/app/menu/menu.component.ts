import { Component, OnInit } from '@angular/core';
import { ActividadesService } from '../services/actividades.service';
import { Activity } from '../Modelos/Activity';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  private _aid: number;
  currentActivity: Activity;
  value: string;
  viewValue: string;
  constructor(private _actividadesService: ActividadesService) { }

  ngOnInit() {
    this._actividadesService.getActivityFromApiByAid(this._aid).subscribe(res => this.currentActivity = res);
  }

  feelings: any[] = [
    {value: '1', viewValue: 'LONELY'},
    {value: '2', viewValue: 'SAD'},
    {value: '3', viewValue: 'ANGRY'},
    {value: '4', viewValue: 'DEPRESSED'},
    {value: '5', viewValue: 'STRESSED'}
  ];
}
