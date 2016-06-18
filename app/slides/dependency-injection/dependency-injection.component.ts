
import {Component} from '@angular/core';
import {SourceCodeViewComponent} from '../../components/source-code-view/source-code-view.component';

@Component({
    moduleId: module.id,
    selector: 'dependency-injection',
    styleUrls: ['dependency-injection.component.css'],
    templateUrl: 'dependency-injection.component.html',
    directives: [SourceCodeViewComponent]
})
export class DependencyInjectionComponent {
    public thisModuleId: string = module.id;
}
