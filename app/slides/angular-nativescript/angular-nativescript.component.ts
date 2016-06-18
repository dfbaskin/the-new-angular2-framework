
import {Component} from '@angular/core';
import {UrlResolver} from '@angular/compiler';

@Component({
    moduleId: module.id,
    selector: 'angular-nativescript',
    styleUrls: ['angular-nativescript.component.css'],
    templateUrl: 'angular-nativescript.component.html'
})
export class AngularNativescriptComponent {

    constructor(private urlResolver: UrlResolver) {
    }

    public resolvePath(path) {
        return this.urlResolver.resolve(module.id, path);
    }
}
