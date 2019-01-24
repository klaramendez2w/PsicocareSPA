import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestsService } from '../services/tests.service';
import { Router } from '@angular/router';
import { Test } from '../Modelos/Test';


declare let $: any;


@Component({
  selector: 'app-ntest',
  templateUrl: './ntest.component.html',
  styleUrls: ['./ntest.component.scss']
})
export class NTestComponent implements OnInit {

  
  private _paso: number=0;
  private _respuestas:Test=new Test(1,0,0,0,0,0,0,0,0,0); //me lo tengo que llevar al service(donde lo tenía);

  

title:string='PsicoTest';
  
pregunta1:string=' 1. How do you feel about your future?';
pregunta2:string=' 2. I feel confident about my ability to handle my personal problems';
pregunta3:string=' 3. It is difficult for me to be in a social situation in which people might judge me.';
pregunta4:string=' 4. I am angry because things happen outside my control.';
pregunta5:string=' 5. In the last two weeks I have been worrying too much about different things';

progreso:string;
progressnumber:string;

  constructor(private route: ActivatedRoute, private testService: TestsService, private _router:Router) { }

  
  ngOnInit() {
    
    $('select').formSelect();

    this.route.params.subscribe(params => {
      console.log('params', params);
      this._paso = params['paso'];
    });



    //this._respuestas=TestsService.getRespuestas();  hacemos localstorage o directamente con la API
  }
  //El siguiente método controla el flujo del test
  siguientePaso(){
    console.log('Paso:',this._paso+1);
    this._paso++;
    if(this._paso<=5){
      //redireccion al siguiente paso 
      this._router.navigate(['/test']);

        
    }else{
      
      //al contestar la última pregunta redirigimos a resultados y guardamos las respuestas en localstorage. 
      //Una vez en resultados si el usuario quiere registrarse, conectaremos con la API para añadir el test a la base de datos
      this._router.navigate(['/results']);
      window.localStorage.setItem('enviorespuestas', JSON.stringify(this._respuestas));

      //Otra opción sería enviar el test directamente a la API
     /* this.testService.addTestFromApiByTid(this._respuestas).subscribe(testadded =>
        this._respuestas = testadded);*/

    }
  }

}
