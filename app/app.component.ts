
import {Component, ViewChildren, QueryList} from '@angular/core';
import {TitlePageComponent} from './slides/title-page/title-page.component';
import {ClosingPageComponent} from './slides/closing-page/closing-page.component';
import {SlideDirective} from './slide.directive';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives: [
        TitlePageComponent,
        ClosingPageComponent,
        SlideDirective
    ]
})
export class AppComponent {
    @ViewChildren(SlideDirective) slides: QueryList<SlideDirective>;

    private currentSlide = 0;

    ngAfterViewInit() {
        this.updateSlides();
    }

    handleKey(evt: KeyboardEvent) {
        switch(evt.key) {
            case "ArrowLeft":
                if(this.currentSlide > 0) {
                    this.currentSlide -= 1;
                    this.updateSlides();
                }
                break;
            case "ArrowRight":
                if(this.currentSlide + 1 < this.slides.length) {
                    this.currentSlide += 1;
                    this.updateSlides();
                }
                break;
        }
    }

    updateSlides() {
        this.slides.toArray()
            .forEach((slide, idx) => {
                slide.showSlide(idx === this.currentSlide);
            });
    }
}
