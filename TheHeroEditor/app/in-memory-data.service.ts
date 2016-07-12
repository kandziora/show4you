export class InMemoryDataService {
    createDb() {
        let shows = [
            { "id": 11, "name": "Zakk ee ade", "genre": "Rock", "support": "", "venue": "Lido", "date": new Date(2016,6,12), "address" : "Cuvrystraße 7, 10997 Berlin", "address_lat" : 52.49917, "address_lng" : 13.444999999999936 },
            { "id": 12, "name": "Municipal Waste", "genre": "Thrash Metal", "support": "Reactory", "venue": "Bi Nuu", "date": new Date(2016,6,12), "address" : "U-Bahnhof Schlesisches Tor, 10997 Berlin", "address_lat" : 52.5009276, "address_lng" : 13.441525700000057 },
            { "id": 13, "name": "Devil Driver", "genre": "Modern Metal", "support": "", "venue": "Bi Nuu", "date": new Date(2016,6,12), "address" : "U-Bahnhof Schlesisches Tor, 10997 Berlin", "address_lat" : 52.5009276, "address_lng" : 13.441525700000057 },
            { "id": 14, "name": "Napalm Death", "genre": "Grind Core", "support": "Hammercult", "venue": "SO36", "date": new Date(2016,6,12), "address" : "Oranienstraße 190, 10999 Berlin", "address_lat" : 52.50093409999999, "address_lng" : 13.421875799999953 },
            { "id": 15, "name": "Mastodon", "genre": "Progressive Metal", "support": "", "venue": "Huxleys", "date": new Date(2016,6,12), "address" : "Hasenheide 107, 10967 Berlin", "address_lat" : 52.4863405, "address_lng" : 13.422076999999945 },
            { "id": 16, "name": "Overkill", "genre": "Metal", "support": "Crowbar", "venue": "SO36", "date": new Date(2016,6,12), "address" : "Oranienstraße 190, 10999 Berlin", "address_lat" : 52.50093409999999, "address_lng" : 13.421875799999953 }
        ];

        let venues = [
            { "id": 21, "venue": "Lido", "address" : "Cuvrystraße 7, 10997 Berlin", "address_lat" : 52.49917, "address_lng" : 13.444999999999936 },
            { "id": 22, "venue": "Bi Nuu", "address" : "U-Bahnhof Schlesisches Tor, 10997 Berlin", "address_lat" : 52.5009276, "address_lng" : 13.441525700000057 },
            { "id": 23, "venue": "Astra", "address" : "Revaler Str. 99, 10245 Berlin", "address_lat" : 52.50763269999999, "address_lng" : 13.454361199999994 },
            { "id": 24, "venue": "SO36", "address" : "Oranienstraße 190, 10999 Berlin", "address_lat" : 52.50093409999999, "address_lng" : 13.421875799999953 },
            { "id": 25, "venue": "Huxleys", "address" : "Hasenheide 107, 10967 Berlin", "address_lat" : 52.4863405, "address_lng" : 13.422076999999945 },
            { "id": 26, "venue": "Columbia Halle", "address" : "Columbiadamm 13-21, 10965 Berlin", "address_lat" : 52.48471, "address_lng" : 13.391300000000001 }
        ];
        return {venues,shows};
    }

}