import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from './video';
import {PlaylistComponent} from './playlist.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [PlaylistComponent]
})

export class AppComponent {
    mainHeading = Config.MAIN_HEADING;
    videos: Array<Video>;

    constructor(){
        this.videos = [
            new Video(1, "Installing Django", "qgGIqRFvFFk", "How to install Django"),
            new Video(2, "Creating a Project", "CHjXtRrhqxc", "How to create a project")
        ]
    }
}
