import { Component, OnInit } from '@angular/core';
import { UsuarioService } from  '../services/usuario.service';
import { User } from '../Modelos/User';
import { Message } from '../Modelos/Message';
import { Intertable } from '../Modelos/intertable';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
  
})
export class WelcomeComponent implements OnInit {
    activities: User[] = null;
    inter: Intertable = null;

    currentmessage: Message;


  constructor(private _usuarioservice:UsuarioService,  private _router: Router) {}

  ngOnInit() {
    let that=this;
    let reference =this._usuarioservice;//El objetivo es poder llamar al servicio declarado en el constructor dentro de funciones
    let reference2=this.inter;
    let anxiety= JSON.parse(window.localStorage.getItem("Anxiety"));
    let depression=   JSON.parse(window.localStorage.getItem("Depression"));
    let stress=  JSON.parse(window.localStorage.getItem("Stress"));
    let socialanxiety=  JSON.parse(window.localStorage.getItem("Socialanxiety"));
   
    
    document.getElementById('register').onclick = (function(event){  //Creamos un evento para que al hacer click en el botón de registrarse se pueda detectar si el registro por parte del usuario está incompleto o contiene errores
    event.preventDefault();

    
    document.querySelectorAll('.error').forEach(elem => {
        elem.classList.add('hide');
    });


let formValid:HTMLFormElement = document.getElementById('loginform') as HTMLFormElement;
 let formValid2=formValid.checkValidity();

 let passwordeqs:HTMLInputElement = document.getElementById('password') as HTMLInputElement;
 let confirmeqs:HTMLInputElement = document.getElementById('confirm') as HTMLInputElement;

let passEqs = (passwordeqs.value== confirmeqs.value); // Validamos el formulario y declaramos una variable para comprobar que el password y el password de confirmación son iguales.

    
let nombre:HTMLInputElement =document.getElementById("name") as HTMLInputElement;
let email:HTMLInputElement =document.getElementById("email")as HTMLInputElement  ;
let username:HTMLInputElement =document.getElementById("username")as HTMLInputElement  ;
let contraseña:HTMLInputElement =document.getElementById("password")as HTMLInputElement  ;
let contraseñabis:HTMLInputElement =document.getElementById("confirm")as HTMLInputElement  ;

if (formValid2 && passEqs) {
    




    let datosUsuario= { //Creamos el objeto datosUsuario para recoger agrupar la información del usuario.
        yourname:nombre.value,
        email:email.value,
        username: username.value,
        password: contraseña.value,
        confirmpassword:contraseñabis.value
    
    };
    let number= reference.validateregisterform(datosUsuario.yourname,datosUsuario.email,datosUsuario.username,datosUsuario.password,datosUsuario.confirmpassword);
    console.log(number);

    let component= reference.validatecomponentes(anxiety,depression,stress,socialanxiety);
    console.log("Componentes"+component);



    //Subimos a la base de datos
    //añadir componentes
    if((number=1)) {
//Comprobamos que el email y el username no esten en la base de datos

reference.checkmail(datosUsuario.email).subscribe(data => {

    let mensajemail = data.body.message;
    let codigorojo = data.body.status_code;

    


    reference.checkusername(datosUsuario.username).subscribe(contra =>{

        let mensajeusuario=contra.body.message;
        let codigoazul = contra.body.status_code;


        if(codigorojo==202 && codigoazul==202){
       console.log(" Neither username or email are already in use");
       //ESTO HAY QUE BORRARLO CUANDO SE UNA CON LA PARTE DE TEST
       let arrayrespuestas=JSON.parse(window.localStorage.getItem("enviorespuestas"));


       let respuesta1=arrayrespuestas._respuesta1;
       let respuesta2=arrayrespuestas._respuesta2;
       let respuesta3=arrayrespuestas._respuesta3;
       let respuesta4=arrayrespuestas._respuesta4;
       let respuesta5=arrayrespuestas._respuesta5;
 

         
            reference.subidausuario(datosUsuario.yourname,datosUsuario.email,datosUsuario.username,datosUsuario.password).subscribe(
                userdata=>    {   
            console.log(userdata.id );
            let uid:number=userdata.id;
            if(userdata.id>0){ 
            console.log("usuario  correctamente subido"); 

            reference.subidatest(anxiety,depression,stress,socialanxiety,respuesta1,respuesta2,respuesta3,respuesta4,respuesta5).subscribe(
            testdata=>  {   
                
                let tid:number=testdata.tid;
                console.log(tid);
           if(tid>0)    { console.log("test correctamente subido");  
      

          reference.subidatablaintermedia(uid,tid).subscribe(
          intermediatedata=>  { 

            let codeintermediate=intermediatedata.status_code;
            console.log(codeintermediate);


            if(codeintermediate==202) {  
                console.log("intermediate uploaded");
                that._router.navigate(['/login']);
            }


             if(codeintermediate!=202){  
                console.log("ERROR: intermediate not uploaded");
                document.getElementById('errorsubidaserver').classList.remove('hide');




                reference.deleteuser(uid).subscribe( 
                    deletedata=>  {   
        
                        let deleted =deletedata;
                        console.log(deleted);

                        reference.deletetest(tid).subscribe( 
                            deletetestdata=>  {   
                
                                let deleted =deletetestdata;
                                console.log(deleted.message+" "+deleted.status_code);
                
                             }
                           )
        
                     }
                   )

            }

            }


        )
        
        
        
        
        }


           else     { console.log("Error durante la subida del test ");    
           document.getElementById('errorsubidaserver').classList.remove('hide');


           reference.deleteuser(uid).subscribe( 
            deletedata=>  {   

                let deleted =deletedata;
                console.log(deleted);

             }
           )
           
        }


    } )
  
}


else     { console.log("Error durante la subida del usuario ");    }
document.getElementById('errorsubidaserver').classList.remove('hide');


} )

        }
        else if(codigorojo==202 && codigoazul==200){
       console.log("  username is already in use");
       document.getElementById('errorregistrousuario').classList.remove('hide');


        }
        
        else if(codigorojo==200 && codigoazul==202){
            console.log("  email is already in use");
            document.getElementById('errorregistroemail').classList.remove('hide');

            
     
             }
        
         else if(codigorojo==200 && codigoazul==200){
                console.log("  Both email and username are already in use");
                document.getElementById('errorregistroemail').classList.remove('hide');
                document.getElementById('errorregistrousuario').classList.remove('hide');

                


         
                 }
        
        else if(codigorojo=300){console.log("")}
        else{ 
            console.log("INTERNAL SERVER ERROR ");
            document.getElementById('errorsubidaserver').classList.remove('hide');}


    }
        
        )


 
   
    



})
   

     }

  

} else { // si los datos introducidos son incorrectos,y no se valida el formulario, aparecen los errores correspondientes.

    if (!nombre.checkValidity()) {
        document.getElementById('errorname').classList.remove('hide');
    }
    if (!email.checkValidity()) {
        document.getElementById('erroremail').classList.remove('hide');
    }

    if (!username.checkValidity()) {
        document.getElementById('errorusuario').classList.remove('hide');
    }
    if (!contraseña.checkValidity()) {
        document.getElementById('errorpassword').classList.remove('hide');
    }

    if(!passEqs){ // si los passwords son diferentes, aparece el error correspondiente

        document.getElementById('passwordnomatch').classList.remove('hide');

    }

}


});

  }

}
