export class Patient{
    private _name:string;
    private _code:string;
    private _exam:boolean;

    constructor(name: string, code: string) {
        this._name = name;
        this._code = code;
        this._exam=false;
    }
    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }
    get code(): string {
        return this._code;
    }
    set code(value: string) {
        this._code = value;
    }
    get exam(){
        return this._exam;
    }
    Exam():void{
        this._exam=true;
    }
}