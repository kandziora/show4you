import {Component, Input}   from '@angular/core';
import {Show}              from './show';


@Component({
    selector: 'show-date',

    template: `<div class="date">
                  <p>The hero's birthday is </p>{{ date | uppercase}}
                  <!--<button (click)="toggleFormat()">Toggle Date Format</button>-->
                </div>
                `

})


export class ShowDate {
/*
    @Input()
    show: Show;
*/


    private date = new Date()//this.show.date;
    toggle = true; // start with true == shortDate

    get format()   { return this.toggle ? 'shortDate' : 'fullDate'}
    toggleFormat() { this.toggle = !this.toggle; }

}