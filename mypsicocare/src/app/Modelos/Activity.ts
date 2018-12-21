export class Activity {

    constructor(private _aid:number, private _statement:string, private _value:string, private _content:String, private _about:String, private _description:String, private _countdown:number){
    }
    
        get uid(){return this._aid;}
        get statement(){return this._statement;}
        get value(){return this._value;}
        get content(){return this._content;}
        get about(){return this._about;}
        get description(){return this._description;}
        get countdown(){return this._countdown;}

        
        set uid(aid){this._aid=aid; }
        set statement(statement){this._statement=statement; }
        set value(value){this._value=value; }
        set content(content){this._content=content; }
        set about(about){this._about=about; }
        set description(description){this._description=description; }
        set countdown(countdown){this._countdown=countdown; }

}