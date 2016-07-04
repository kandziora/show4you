export class Show {
    id:number;
    name:string;
    genre:string;
    support:string;
    date:Date;
    address:string;
    address_lat:number;
    address_lng:number;

    constructor(id:number = 0, name:string = "new Show", genre:string = "misc.", support:string = "", date:Date = new Date(2016, 6, 12), address:string = "Berlin, Germany", address_lat:number = 52.52000659999999, address_lng:number = 13.404954) {
        this.id = id;
        this.name = name;
        this.genre = genre;
        this.support = support;
        this.date = date;
        this.address = address;
        this.address_lat = address_lat;
        this.address_lng = address_lng;
    }
}