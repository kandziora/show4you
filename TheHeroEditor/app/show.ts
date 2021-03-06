export class Show {
    id:number;
    name:string;
    genre:string;
    support:string;
    venue: string;
    date:Date;
    time:string;
    address:string;
    address_lat:number;
    address_lng:number;

    constructor(id:number = 0, name:string = "new Show", genre:string = "misc.", support:string = "", venue:string = "where?", date:Date = new Date(2016, 6, 12), time:string = "20:00", address:string = "Berlin, Germany", address_lat:number = 52.5243700, address_lng:number = 13.4105300) {
        this.id = id;
        this.name = name;
        this.genre = genre;
        this.support = support;
        this.venue = venue;
        this.date = date;
        this.time = time;
        this.address = address;
        this.address_lat = address_lat;
        this.address_lng = address_lng;
    }
}