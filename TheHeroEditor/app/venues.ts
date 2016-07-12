export class Venue {
    id: number;
    venue: string;
    address:string;
    address_lat:number;
    address_lng:number;

    constructor(id:number = 0, venue:string = "where?", address:string = "Berlin, Germany", address_lat:number = 52.5243700, address_lng:number = 13.4105300) {
        this.id = id;
        this.venue = venue;
        this.address = address;
        this.address_lat = address_lat;
        this.address_lng = address_lng;
    }
}