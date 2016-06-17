
import {Component} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {UrlResolver} from '@angular/compiler';
import {Http} from '@angular/http';

declare var Prism: any;

@Component({
    moduleId: module.id,
    selector: 'components-overview',
    styleUrls: ['components-overview.component.css'],
    templateUrl: 'components-overview.component.html'
})
export class ComponentsOverviewComponent {

    sourceCode$: Observable<string>;

    constructor(private http: Http, private urlResolver: UrlResolver) {
        this.loadContent();
    }

    private loadContent() {
        let contentUrl = this.urlResolver.resolve(module.id, 'example-component.ts.txt');
        this.sourceCode$ = this.http.get(contentUrl)
            .map(rsp => rsp.text())
            .do(src => setTimeout(() => Prism.highlightAll(), 5000));
    }
}
