export class Intertable {

    constructor(private _uid:number, private _tid:number ){
    }
    
    get uid(){return this._uid;}
    get tid(){return this._tid;}

    set uid(uid){this._uid = uid; }
    set tid(tid){this._tid = tid; }

   



}

