import { Component, OnInit } from '@angular/core';
import { ActividadesService } from '../services/actividades.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homeactividades',
  templateUrl: './homeactividades.component.html',
  styleUrls: ['./homeactividades.component.scss']
})
export class HomeactividadesComponent implements OnInit {

  constructor(private _actividadesService:ActividadesService, private _router:Router) { }

  ngOnInit() {
      
  }

}
