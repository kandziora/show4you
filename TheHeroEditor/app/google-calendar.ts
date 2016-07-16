/**
 * Created by jorgeayala on 13/07/16.
 */
import { Component, OnInit } from '@angular/core';

import { GoogleCalService } from './google-calendar.service';


@Component({
    selector: 'google-calendar',
    styleUrls:  ['app/shows-detail.component.css'],
    template: `
    <div id="google_calendar">
        <h2>Google Calendar!</h2>
           
            
        <div id="authorize-div" style="display: none">
            <span>Authorize access to Google Calendar API</span>
        
            <!--Button for the user to click to initiate auth sequence -->
            <img class="logo" (click)="handleAuthClick(event)" src="/app/google_signin.png"/>
        </div>
    
        <pre id="output"></pre>
    </div>
`,
    providers: [GoogleCalService]
})

export class GoogleCalComponent  {

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
}