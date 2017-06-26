import {Directive, ElementRef, AfterViewInit} from '@angular/core';

@Directive({selector: '[emptytext]'})
export class EmptyTextDirective implements AfterViewInit {
    constructor(private el: ElementRef) {
    }

    ngAfterViewInit() {
        let content: string = this.el.nativeElement.innerHTML;
        if (!content) {//if there is no content,show message getting from EmptyTextService
            this.el.nativeElement.innerHTML = 'empty';
        }
    }
}