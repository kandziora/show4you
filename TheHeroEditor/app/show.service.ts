import  { injectable } from '@angular/core';
import {SHOWS} from "./mock-shows";



@injectable()
export class ShowService{
    getShows(){
        return SHOWS;
    }
}

