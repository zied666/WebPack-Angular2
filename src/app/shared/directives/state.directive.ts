import {Directive, ElementRef, Renderer, Input, OnChanges} from '@angular/core';

@Directive({
    selector: '[state]'
})

export class StateDirective implements OnChanges {
    @Input('state') itemState: any;
    private element: ElementRef;
    private renderer: Renderer;


    constructor(renderer: Renderer, el: ElementRef) {
        this.element = el;
        this.renderer = renderer;

    }

    ngOnChanges() {
        let cssClass = `state-${this.itemState}`;
        let text = 'A livrer';
        let elementNode = this.element.nativeElement;
        switch (this.itemState) {
            case 1 :
                text = "aaaaa";
                break;
            case 2 :
                text = "xxxxx";
                break;
            case 3 :
                text = "wwwww";
                break;
            default:
                text = "zied !!!";
        }
        this.renderer.setElementClass(elementNode, cssClass, true);
        this.renderer.setText(elementNode, text);
    }
}