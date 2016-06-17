
import {Component} from '@angular/core';
import {SourceCodeViewComponent} from '../../components/source-code-view/source-code-view.component';

@Component({
    moduleId: module.id,
    selector: 'components-overview',
    styleUrls: ['components-overview.component.css'],
    templateUrl: 'components-overview.component.html',
    directives: [SourceCodeViewComponent]
})
export class ComponentsOverviewComponent {
    public thisModuleId: string = module.id;
}
