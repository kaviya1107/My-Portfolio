export class Tag{
    static readonly angular=new Tag('Angular','red');
    static readonly typescript=new Tag('Typescript','blue');
    static readonly java=new Tag('Java','black');
    static readonly python=new Tag('Python','pink');


    constructor(public readonly key:string, public readonly color:string){

    }
    toString(){ //method name
        return this.key;//only return key value 
    }
}