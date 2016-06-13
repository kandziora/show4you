import { Injectable } from '@angular/core';
import { Show } from './show';
import { SHOWS } from './mock-shows';


@Injectable()
export class ShowService {
    getShows() {
        return Promise.resolve(SHOWS);
    }
    // See the "Take it slow" appendix
    getShowsSlowly() {
        return new Promise<Show[]>(resolve =>
            setTimeout(()=>resolve(SHOWS), 2000) // 2 seconds
        );
    }
}