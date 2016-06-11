
import {Component} from '@angular/core';
import {TitlePageComponent} from './slides/title-page.component';
import {ClosingPageComponent} from './slides/closing-page.component';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [
        TitlePageComponent,
        ClosingPageComponent
    ]
})
export class AppComponent { }