/**
 * Created by jorgeayala on 13/07/16.
 */
import { Component, OnInit, Input } from '@angular/core';

import { GoogleCalService } from './google-calendar.service';
import {Show} from "./show";


@Component({
    selector: 'google-calendar',
    styleUrls:  ['app/list_style.css'],
    template: `
            <button class="btnGUI" (click)="insertNewEvent(show)">Insert New Event</button>
`,
    providers: [GoogleCalService]
})

export class GoogleCalComponent  {
    @Input()
    show:Show;

    constructor(private googleCalService: GoogleCalService) {
        this.googleCalService = googleCalService;
    }

    handleAuthClick(event) {
        this.googleCalService.handleAuthClick(event);
    }

    checkAuth(){
        this.googleCalService.checkAuth();
    }

    ngOnInit() {
        this.checkAuth();
    }

    insertNewEvent(show) {
        console.log("aefawef");
        this.googleCalService.insertNewEvent(show);
    }
}