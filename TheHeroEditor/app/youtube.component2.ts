import { bind, Component, Injectable} from '@angular/core';

import { Http, HTTP_BINDINGS} from '@angular/http';
import { bootstrap }    from '@angular/platform-browser-dynamic';
import {RxPipe} from './rxPipe';
import {YouTubeAPI} from './youTube'


@Component({
    selector: 'helloworld-app',
    properties: ['video'],
    template: `
    <div style="border: 1px solid black">
      <h3>{{video.snippet.title}}</h3>
      <h4>{{video.snippet.channelTitle}}</h4>
      <div>
        <img [src]="video.snippet.thumbnails.default.url"></img>
      </div>
    </div>
    
       <div>
     <h3>angular2 + youtube search</h3>
     <form  [ng-form-model]="youtubeQuery">
      <input type="text" ng-control="title">
     </form>
   
     <div *ng-for="#video of videos | rx">
      <search-result [video]="video"></search-result>
     </div>
     
   </div>
  `,
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, SearchResult],
    pipes: [RxPipe]
    //changeDetection: ON_PUSH
})

export class YouTubeApp {
    
    
    constructor(youtube: YouTubeAPI,formBuilder:FormBuilder){
        this.youtubeQuery = formBuilder.group({
            title: ["", Validators.required]
        });

        let queries = this.youtubeQuery.valueChanges.toRx();

        this.videos = queries.flatMapLatest(query => youtube.search(query.title));
    }
}

bootstrap(YouTubeApp,[FORM_BINDINGS, HTTP_BINDINGS, YouTubeAPI])
    .catch(err => console.log(err));