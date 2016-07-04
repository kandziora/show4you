export class InMemoryDataService {
    createDb() {
        let shows = [
            { "id": 11, "name": "Zakk ee ade", "genre": "Rock", "support": "", "date": new Date(2016,6,12), "address" : "Potsdamer Pl.,10785 Berlin", "address_lat" : "52.5093519", "address_lng" : "13.3757392" },
            { "id": 12, "name": "Municipal Waste", "genre": "Thrash Metal", "support": "Reactory", "date": new Date(2016,6,12), "address" : "Mitte,Große Querallee,10557 Berlin", "address_lat" : "52.5180447", "address_lng" : "13.3674053" },
            { "id": 13, "name": "Devil Driver", "genre": "Modern Metal", "support": "", "date": new Date(2016,6,12), "address" : "Prinzenstrasse 35 – 38,10969 Berlin", "address_lat" : "52.5029029", "address_lng" : "13.4103128" },
            { "id": 14, "name": "Napalm Death", "genre": "Grind Core", "support": "Hammercult", "date": new Date(2016,6,12), "address" : "Grunewaldstraße 54,10825 Berlin", "address_lat" : "52.4881688", "address_lng" : "13.3377084" },
            { "id": 15, "name": "Mastodon", "genre": "Progressive Metal", "support": "", "date": new Date(2016,6,12), "address" : "Kurfürstendamm 207,10719 Berlin", "address_lat" : "52.50186", "address_lng" : "13.32312" },
            { "id": 16, "name": "Overkill", "genre": "Metal", "support": "Crowbar", "date": new Date(2016,6,12), "address" : "Luxemburger Str. 10,13353 Berlin", "address_lat" : "52.5451157", "address_lng" : "13.3552318" }
        ];
        return {shows};
    }
}