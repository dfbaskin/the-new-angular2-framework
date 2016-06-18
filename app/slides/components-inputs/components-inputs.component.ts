
import {Component} from '@angular/core';
import {SourceCodeViewComponent} from '../../components/source-code-view/source-code-view.component';

@Component({
    moduleId: module.id,
    selector: 'components-inputs',
    styleUrls: ['components-inputs.component.css'],
    templateUrl: 'components-inputs.component.html',
    directives: [SourceCodeViewComponent]
})
export class ComponentsInputsComponent {
    public thisModuleId: string = module.id;
}
