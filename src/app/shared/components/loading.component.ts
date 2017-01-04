import {Component} from '@angular/core';

@Component({
    selector: 'loading',
    template: `
                <div class="animated loading">
                    <img style="display: block; margin-left: auto; margin-right: auto;max-width: 316px;" src="assets/img/loading.jpg" />
                </div>
`
})
export class LoadingComponent {
}