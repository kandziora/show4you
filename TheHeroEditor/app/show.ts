export class Show {
     id              : number;
     name            : string;
     genre           : string;
     support         : string;
     date            : Date;


    constructor (id:number, name:string, genre:string, support:string, date:Date) {
        this.id                 = id;
        this.name               = name;
        this.genre              = genre;
        this.support            = support;
        this.date               = date;
    }
}