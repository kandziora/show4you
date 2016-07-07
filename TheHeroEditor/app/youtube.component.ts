import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor } from '@angular/common';


@Component({
    selector: 'helloworld-app',
    templateUrl: 'app/youtube.component.html',
    inputs: [
        'list'
    ],
    directives: [NgFor]
})

export class YoutubeList {
    @Output() play = new EventEmitter();
    @Output() queue = new EventEmitter();
    @Output() add = new EventEmitter();
    constructor () {}
    playSelectedVideo (media) {
        this.play.next(media);
    }
    queueSelectedVideo (media) {
        this.queue.next(media);
    }
    addVideo (media) {
        this.add.next(media);
    }
}