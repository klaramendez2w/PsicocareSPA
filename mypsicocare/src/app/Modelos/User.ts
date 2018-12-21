    export class User {

        constructor(private _uid:number, private _name:string, private _email:string, private _password:String){
        }
            get uid(){return this._uid;}
            get name(){return this._name;}
            get email(){return this._email;}
            get password(){return this._password;}
            
            set uid(uid){this._uid=uid; }
            set name(name){this._name=name; }
            set email(email){this._email=email; }
            set password(password){this._password=password; }
        
        
        
        
        
    
        
    
    
    
        
    }