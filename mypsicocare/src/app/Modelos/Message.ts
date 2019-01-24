export class Message {

    constructor(private _message:string,private _status_code:number, ){
    }
    
    get message(){return this._message;}
    get status_code(){return this._status_code;}

    set message(message){this._message = message; }
    set status_code(status_code){this._status_code = status_code; }

   



}

