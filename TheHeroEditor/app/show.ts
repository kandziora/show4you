export class Show {
     id              : number;
     name            : string;
     genre           : string;
     support         : string;
     date            : Date;


    constructor (id:number = 0, name:string = "new Show", genre:string = "misc.", support:string = "", date:Date = new Date(2016,6,12)) {
        this.id                 = id;
        this.name               = name;
        this.genre              = genre;
        this.support            = support;
        this.date               = date;
    }
}