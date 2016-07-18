import {Pipe, PipeTransform, Injectable } from'@angular/core';
import  {Show} from './show';
import  {Venue} from './venues';


@Pipe({
    name: 'showfilter'
})

@Injectable()
export class MyFilterPipe implements PipeTransform {
    asdf = "";
    show: Show;
    venue: Venue;




    transform(value, args) {
        if (!args[0]) {
            return value;
        } else if (value) {
            return value.filter(item => {
                for (let key in item) {
                    if ((typeof item[key] === 'string' || item[key] instanceof String) &&
                        (item[key].indexOf(args[0]) !== -1)) {
                        return true;
                    }
                }
            });
        }
    }

}