
import {Component} from '@angular/core';
import {UrlResolver} from '@angular/compiler';

@Component({
    moduleId: module.id,
    selector: 'many-hats',
    styleUrls: ['many-hats.component.css'],
    templateUrl: 'many-hats.component.html'
})
export class ManyHatsComponent {

    constructor(private urlResolver: UrlResolver) {
    }

    public resolvePath(path) {
        return this.urlResolver.resolve(module.id, path);
    }
}

