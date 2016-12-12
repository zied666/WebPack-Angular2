import {Component, Input, OnChanges, SimpleChanges, OnInit, SimpleChange} from '@angular/core';

@Component({
    selector: 'alert',
    template: `
            <div *ngIf="view"  class="alert alert-{{class}}" role="alert">
                <strong>{{class.toUpperCase()}}:</strong>
                {{ text|translate }}
            </div>    
`
})
export class AlertComponent implements OnChanges{
    @Input() class: String; //success,info,warning and danger
    @Input() view: Boolean;
    @Input() text: String;

    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
        if(changes['view'].currentValue)
            setTimeout(() => this.view = false, 3000);
    }

}