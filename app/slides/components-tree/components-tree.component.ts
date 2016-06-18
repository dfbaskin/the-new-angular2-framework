
import {Component} from '@angular/core';
import {UrlResolver} from '@angular/compiler';

@Component({
    moduleId: module.id,
    selector: 'components-tree',
    styleUrls: ['components-tree.component.css'],
    templateUrl: 'components-tree.component.html'
})
export class ComponentsTreeComponent {

    public showOptimized: boolean = false;

    constructor(private urlResolver: UrlResolver) {
    }

    public resolvePath(path) {
        return this.urlResolver.resolve(module.id, path);
    }

    public toggleShowOptimized() {
        this.showOptimized = !this.showOptimized;
    }
}
