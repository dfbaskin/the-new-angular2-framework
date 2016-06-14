
import {Component, ViewChildren, QueryList} from '@angular/core';
import {Location} from '@angular/common';
import {SlideDirective} from './slide.directive';
import {TitlePageComponent} from './slides/title-page/title-page.component';
import {ClosingPageComponent} from './slides/closing-page/closing-page.component';

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

    constructor(private location: Location) {
    }

    ngAfterViewInit() {
        let idx = Number(this.location.path());
        if(idx >= 0 && idx < this.slides.length) {
            this.currentSlide = idx;
        }
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
        this.location.go(this.currentSlide.toString());
    }
}
