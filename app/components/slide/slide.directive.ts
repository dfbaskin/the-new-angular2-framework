
import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '.slide'
})
export class SlideDirective {
    constructor(private elem: ElementRef) {
    }

    public showSlide(show: boolean) {
        this.elem.nativeElement.style.opacity = show ? 1 : 0;
    }
}
