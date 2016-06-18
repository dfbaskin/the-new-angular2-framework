
import {Component} from '@angular/core';
import {UrlResolver} from '@angular/compiler';

@Component({
    moduleId: module.id,
    selector: 'angular-electron',
    styleUrls: ['angular-electron.component.css'],
    templateUrl: 'angular-electron.component.html'
})
export class AngularElectronComponent {

    constructor(private urlResolver: UrlResolver) {
    }

    public resolvePath(path) {
        return this.urlResolver.resolve(module.id, path);
    }
}
