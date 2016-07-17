/**
 * Created by jorgeayala on 07/07/16.
 */
import { Injectable, Input } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Show } from './show';

import 'rxjs/add/operator/toPromise';

declare var gapi:any;

//scope needed because this is not defined after checkAuth();
var scope:any;

@Injectable()
export class GoogleCalService {
    @Input()
    show:Show;

    CLIENT_ID:string = '120541098486-su6ilk1gtcenf9b0upa9hb53mokg0cl1.apps.googleusercontent.com';
    SCOPES:string[] = ['https://www.googleapis.com/auth/calendar','https://www.googleapis.com/auth/calendar.readonly'];

    constructor(public http: Http){
    }

    /**
     * Check if current user has authorized this application.
     */
    checkAuth() {
        scope = this;
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
        if (authResult && !authResult.error) {
            // Hide auth UI, then load client library.
            scope.loadCalendarApi();
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
            this.handleAuthResult);
        return false;
    }

    /**
     * Load Google Calendar client library. List upcoming events
     * once client library is loaded.
     */
    loadCalendarApi() {
        gapi.client.load('calendar', 'v3', null);
    }

    event = {
        'summary': 'Google I/O 2015 ',
        'location': 'Schöneberger Ufer 67, 10785 Berlin',
        'description': 'A chance to hear more about Google\'s developer products.',
        'start': {
            'dateTime': '2016-08-28T09:00:00',
            'timeZone': 'Europe/Berlin'
        },
        'end': {
            'dateTime': '2016-08-28T17:00:00',
            'timeZone': 'Europe/Berlin'
        }
    };

    insertNewEvent(show) {
        scope.event.summary = show.name;
        scope.event.location = show.address;
        scope.event.description = "Pre Bands : " + show.support;

        var request = gapi.client.calendar.events.insert({
            'calendarId': 'primary',
            'resource': scope.event
        });

        request.execute();
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

        request.execute();
    }

}