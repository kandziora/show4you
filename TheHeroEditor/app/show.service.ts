import { Injectable }   from 'angular2/core';
import { SHOWS }        from "./mock-shows";
import { Show }         from './show';


@Injectable()
export class ShowService{
    getShows(){
        return Promise.resolve(SHOWS);
    }

    getShowSlowly(){
        return new Promise<Show[]>(resolve =>
                setTimeout(()=>resolve(SHOWS), 2000) // 2 seconds
    );
    }
}

