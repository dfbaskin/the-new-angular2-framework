
import {Component} from '@angular/core';
import {SourceCodeViewComponent} from '../../components/source-code-view/source-code-view.component';

@Component({
    moduleId: module.id,
    selector: 'components-outputs',
    styleUrls: ['components-outputs.component.css'],
    templateUrl: 'components-outputs.component.html',
    directives: [SourceCodeViewComponent]
})
export class ComponentsOutputsComponent {
    public thisModuleId: string = module.id;
}
