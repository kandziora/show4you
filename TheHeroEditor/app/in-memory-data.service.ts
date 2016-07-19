export class InMemoryDataService {
    createDb() {
        let shows = [
            { "id": 111, "name": "Zakk ee ade", "genre": "Rock", "support": "", "venue": "Lido", "date": new Date(2016, 8, 12, 20, 0), "time" : "20:00", "address" : "Cuvrystraße 7, 10997 Berlin", "address_lat" : 52.49917, "address_lng" : 13.444999999999936 },
            { "id": 112, "name": "Municipal Waste", "genre": "Thrash Metal", "support": "Reactory", "venue": "Bi Nuu", "date": new Date(2016, 8, 22, 21, 0), "time" : "21:00", "address" : "U-Bahnhof Schlesisches Tor, 10997 Berlin", "address_lat" : 52.5009276, "address_lng" : 13.441525700000057 },
            { "id": 113, "name": "Devil Driver", "genre": "Modern Metal", "support": "", "venue": "Bi Nuu", "date": new Date(2016, 9, 12, 18, 30), "time" : "18:30", "address" : "U-Bahnhof Schlesisches Tor, 10997 Berlin", "address_lat" : 52.5009276, "address_lng" : 13.441525700000057 },
            { "id": 114, "name": "Napalm Death", "genre": "Grind Core", "support": "Hammercult", "venue": "SO36", "date": new Date(2016, 19, 1, 12, 15), "time" : "12:15", "address" : "Oranienstraße 190, 10999 Berlin", "address_lat" : 52.50093409999999, "address_lng" : 13.421875799999953 },
            { "id": 115, "name": "Mastodon", "genre": "Progressive Metal", "support": "", "venue": "Huxleys", "date": new Date(2016, 8, 23, 20, 45), "time" : "20:45", "address" : "Hasenheide 107, 10967 Berlin", "address_lat" : 52.4863405, "address_lng" : 13.422076999999945 },
            { "id": 116, "name": "Overkill", "genre": "Metal", "support": "Crowbar", "venue": "SO36", "date": new Date(2016, 11, 12, 10, 0), "time" : "10:00", "address" : "Oranienstraße 190, 10999 Berlin", "address_lat" : 52.50093409999999, "address_lng" : 13.421875799999953 },
            { "id": 117, "name": "Lagwagon", "genre": "Punk", "support": "Useless ID", "venue": "SO36", "date": new Date(2016, 7, 31, 15, 30), "time" : "15:30", "address" : "Oranienstraße 190, 10999 Berlin", "address_lat" : 52.50093409999999, "address_lng" : 13.421875799999953 },
            { "id": 118, "name": "Jello Biafra", "genre": "Punk", "support": "", "venue": "SO36", "date": new Date(2016, 8, 3, 13, 30), "time" : "13:30", "address" : "Oranienstraße 190, 10999 Berlin", "address_lat" : 52.50093409999999, "address_lng" : 13.421875799999953 },
            { "id": 119, "name": "The Casualties", "genre": "Punk", "support": "Reagan Youth", "venue": "SO36", "date": new Date(2016, 8, 11, 9, 0), "time" : "09:00", "address" : "Oranienstraße 190, 10999 Berlin", "address_lat" : 52.50093409999999, "address_lng" : 13.421875799999953 },
            { "id": 120, "name": "H2O", "genre": "Hardcore", "support": "Raw Power", "venue": "Bi Nuu", "date": new Date(2016,8,17), "time" : "20:00", "address" : "U-Bahnhof Schlesisches Tor, 10997 Berlin", "address_lat" : 52.5009276, "address_lng" : 13.441525700000057 },
            { "id": 120, "name": "Steak Number Eight", "genre": "Sludgecore", "support": "", "venue": "Cassiopeia", "date": new Date(2016, 9, 15, 6, 30), "time" : "06:00", "address" : "Revaler Str. 99, 10245 Berlin", "address_lat" : 52.50763269999999, "address_lng" : 13.454361199999994 }
        ];

        let venues = [
            { "id": 1, "venue": "Lido", "address" : "Cuvrystraße 7, 10997 Berlin", "address_lat" : 52.49917, "address_lng" : 13.444999999999936 },
            { "id": 2, "venue": "Bi Nuu", "address" : "U-Bahnhof Schlesisches Tor, 10997 Berlin", "address_lat" : 52.5009276, "address_lng" : 13.441525700000057 },
            { "id": 3, "venue": "Astra", "address" : "Revaler Str. 99, 10245 Berlin", "address_lat" : 52.50763269999999, "address_lng" : 13.454361199999994 },
            { "id": 4, "venue": "SO36", "address" : "Oranienstraße 190, 10999 Berlin", "address_lat" : 52.50093409999999, "address_lng" : 13.421875799999953 },
            { "id": 5, "venue": "Huxleys", "address" : "Hasenheide 107, 10967 Berlin", "address_lat" : 52.4863405, "address_lng" : 13.422076999999945 },
            { "id": 6, "venue": "Columbia Halle", "address" : "Columbiadamm 13-21, 10965 Berlin", "address_lat" : 52.48471, "address_lng" : 13.391300000000001 },
            { "id": 7, "venue": "Columbia Theater", "address" : "Columbiadamm 9-11, 10965 Berlin", "address_lat" : 52.48471659999999, "address_lng" : 13.39145480000002 },
            { "id": 8, "venue": "Cassiopeia", "address" : "Revaler Str. 99, 10245 Berlin", "address_lat" : 52.50763269999999, "address_lng" : 13.454361199999994 },
            { "id": 9, "venue": "Postbahnhof", "address" : "Str. der Pariser Kommune 8, 10243 Berlin", "address_lat" : 52.508725, "address_lng" : 13.436793999999963 }
        ];
        return {venues,shows};
    }

}