import { Component, Input } from '@angular/core';
import { Show } from './show';



@Component({
    selector: 'navigation-component',
    styleUrls: ['app/css/nav.component.css'],
    template: `
        <nav>
        <ul>
            <li>
               New Event
            </li>
            
            <li>
                Eventlist
            </li>
            
            <li>
                Maps
            </li>
            
            <li>
                Calender
            </li>
        </ul>

        </nav>
`
})

export class NavigationComponent {
    @Input()
    show: Show;
}