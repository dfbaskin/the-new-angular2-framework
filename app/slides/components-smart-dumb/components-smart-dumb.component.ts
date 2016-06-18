
import {Component} from '@angular/core';
import {UrlResolver} from '@angular/compiler';

@Component({
    moduleId: module.id,
    selector: 'components-smart-dumb',
    styleUrls: ['components-smart-dumb.component.css'],
    templateUrl: 'components-smart-dumb.component.html'
})
export class ComponentsSmartDumbComponent  {

    constructor(private urlResolver: UrlResolver) {
    }

    public resolvePath(path) {
        return this.urlResolver.resolve(module.id, path);
    }
}
