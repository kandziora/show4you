/// <reference path="../typings/globals/google-apps-script/google-apps-script.calendar/index.d.ts" />
// <amd-dependency path="google-calendar" />

// Imports for loading & configuring the in-memory web api
import {provide}    from '@angular/core';
import {XHRBackend} from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router';
import {InMemoryBackendService, SEED_DATA} from 'angular2-in-memory-web-api';
import {InMemoryDataService}               from './in-memory-data.service';

// The usual bootstrapping imports
import {bootstrap}             from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS}        from '@angular/http';
import {GOOGLE_MAPS_PROVIDERS, provideLazyMapsAPILoaderConfig} from 'angular2-google-maps/core';

import {AppComponent}   from './app.component';

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    provide(XHRBackend, {useClass: InMemoryBackendService}), // in-mem server
    provide(SEED_DATA, {useClass: InMemoryDataService}),     // in-mem server data
    GOOGLE_MAPS_PROVIDERS,
    provideLazyMapsAPILoaderConfig({ apiKey: 'AIzaSyD8AJcFWCcvuLGT0mUjaUUJC6uKYy1-c9c' }),
    ROUTER_PROVIDERS
]);