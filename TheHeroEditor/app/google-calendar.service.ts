/**
 * Created by jorgeayala on 07/07/16.
 */
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
// import { gapi } from 'https://apis.google.com/js/platform.js';

import 'rxjs/add/operator/toPromise';
var gapi;

@Injectable()
export class GoogleCalService {
    CLIENT_ID:string = '120541098486-su6ilk1gtcenf9b0upa9hb53mokg0cl1.apps.googleusercontent.com';
    SCOPES:string[] = ['https://www.googleapis.com/auth/calendar','https://www.googleapis.com/auth/calendar.readonly'];

    // gapi:any;

    // static apiKey:any = 'lT5jcvP9vMr7ALOLAfw-KeQs';
    // static logoutUrl = 'https://accounts.google.com/o/oauth2/revoke?token=';

    private APIUrl = '';// URL to web api

    constructor(public http: Http){
    }

    /**
     * Check if current user has authorized this application.
     */
    checkAuth() {
        gapi.auth.authorize(
        {
            'client_id': this.CLIENT_ID,
            'scope': this.SCOPES.join(' '),
            'immediate': true
        }, this.handleAuthResult);
}

    /**
     * Handle response from authorization server.
     *
     * @param {Object} authResult Authorization result.
     */
    handleAuthResult(authResult) {
    var authorizeDiv = document.getElementById('authorize-div');
    if (authResult && !authResult.error) {
        // Hide auth UI, then load client library.
        authorizeDiv.style.display = 'none';
        this.loadCalendarApi();
    } else {
        // Show auth UI, allowing the user to initiate authorization by
        // clicking authorize button.
        authorizeDiv.style.display = 'inline';
    }
}

    /**
     * Initiate auth flow in response to user clicking authorize button.
     *
     * @param {Event} event Button click event.
     */
    handleAuthClick(event) {
    gapi.auth.authorize(
        {client_id: this.CLIENT_ID, scope: this.SCOPES, immediate: false},
        this.handleAuthResult(this));
    return false;
}

    /**
     * Load Google Calendar client library. List upcoming events
     * once client library is loaded.
     */
    loadCalendarApi() {
    gapi.client.load('calendar', 'v3', this.listUpcomingEvents());
}

    /**
     * Print the summary and start datetime/date of the next ten events in
     * the authorized user's calendar. If no events are found an
     * appropriate message is printed.
     */
    listUpcomingEvents() {
    var request = gapi.client.calendar.events.list({
        'calendarId': 'primary',
        'timeMin': (new Date()).toISOString(),
        'showDeleted': false,
        'singleEvents': true,
        'maxResults': 10,
        'orderBy': 'startTime'
    });

    request.execute(function(resp) {
        var events = resp.items;
        this.appendPre('Upcoming events:');

        if (events.length > 0) {
            for (let i = 0; i < events.length; i++) {
                var event = events[i];
                var when = event.start.dateTime;
                if (!when) {
                    when = event.start.date;
                }
                this.appendPre(event.summary + ' (' + when + ')')
            }
        } else {
            this.appendPre('No upcoming events found.');
        }

    });
}

    /**
     * Append a pre element to the body containing the given message
     * as its text node.
     *
     * @param {string} message Text to be placed in pre element.
     */
    appendPre(message) {
    var pre = document.getElementById('output');
    var textContent = document.createTextNode(message + '\n');
    pre.appendChild(textContent);
}






}