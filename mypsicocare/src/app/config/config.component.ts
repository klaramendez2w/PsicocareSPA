import { Component, OnInit } from '@angular/core';
import { ResourceLoader } from '@angular/compiler';
import * as jquery from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';
//import * as jQuery from 'jquery';

import * as $ from "jquery";
@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {
  showHeroes = true;
  showtheme=false;
   toggleHeroes() {    this.showHeroes=!this.showHeroes }

   toggletheme(number) {  
      }

  constructor(private _router: Router) {
  
  
 
}
  
  ngOnInit() {
    if (!localStorage.getItem('token')) {
      this._router.navigate(['/login'])
    }

    document.getElementById('continue').onclick = (function(event){  //Creamos un evento para que al hacer click en el botón de registrarse se pueda detectar si el registro por parte del usuario está incompleto o contiene errores
      event.preventDefault();

let formValid:HTMLFormElement = document.getElementById('loginform') as HTMLFormElement;
 let formValid2=formValid.checkValidity();

 if(formValid2){ 
 let passwordeqs:HTMLInputElement = document.getElementById('pininput') as HTMLInputElement;
 window.localStorage.setItem("PIN",passwordeqs.value);
 console.log(window.localStorage.getItem("PIN"));

  document.getElementById('popup1').classList.add('hide');
  document.getElementById('anuncioPIN').innerHTML+=" "+passwordeqs.value
  document.getElementById('anuncioPIN').classList.remove('hide');



}

else { 
  
  document.getElementById('errorregistropin').classList.remove('hide');
  
 }


});   
 }
  

 onClick(){

  if(document.getElementById('popup1').className=="popup hide"){
  document.getElementById('popup1').classList.remove('hide');
  let prueba: HTMLInputElement= document.getElementById("pininput") as HTMLInputElement;

    prueba.value="";
    if(  document.getElementById('errorregistropin').className =="errorregistropin") {
      document.getElementById('errorregistropin').classList.add("hide");
    }
    else {   }
}
  else{
    document.getElementById('popup1').classList.add('hide');

    
}


 }


 
      
}




 





