
import {Component} from '@angular/core';
import {UrlResolver} from '@angular/compiler';

@Component({
    moduleId: module.id,
    selector: 'angular-universal',
    styleUrls: ['angular-universal.component.css'],
    templateUrl: 'angular-universal.component.html'
})
export class AngularUniversalComponent {

    constructor(private urlResolver: UrlResolver) {
    }

    public resolvePath(path) {
        return this.urlResolver.resolve(module.id, path);
    }
}
