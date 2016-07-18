import {Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'venue-search',
    template: `<div>
                    <input #input type="text" (input)="update.emit(input.value)"
                    </div>`
})

export class VenueSearch{
    @Output() update = new EventEmitter();

    ngOnInit(){
        this.update.emit('');
    }
}