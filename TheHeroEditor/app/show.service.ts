import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Show } from './show';
import { Venue } from './venues';

@Injectable()
export class ShowService {

    private showsUrl = 'app/shows';  // URL to web api
    private showsVeune = 'app/venues';  // URL to web api

    constructor(private http: Http) { }

    getShows(): Promise<Show[]> {
        return this.http.get(this.showsUrl)
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    getVenues(): Promise<Venue[]> {
        return this.http.get(this.showsVeune)
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    getShow(id: number) {
        return this.getShows()
            .then(shows => shows.filter(show => show.id === id)[0]);
    }
    getVenue(id: number) {
        return this.getVenues()
            .then(venues => venues.filter(venues => venues.id === id)[0]);
    }

    save(show: Show): Promise<Show>  {
        if (show.id) {
            return this.put(show);
        }
        return this.post(show);
    }

    delete(show: Show) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.showsUrl}/${show.id}`;

        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    }

    // Add new Show
    private post(show: Show): Promise<Show> {
        let headers = new Headers({
            'Content-Type': 'application/json'});

        return this.http
            .post(this.showsUrl, JSON.stringify(show), {headers: headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    // Update existing Show
    private put(show: Show) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.showsUrl}/${show.id}`;

        return this.http
            .put(url, JSON.stringify(show), {headers: headers})
            .toPromise()
            .then(() => show)
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}