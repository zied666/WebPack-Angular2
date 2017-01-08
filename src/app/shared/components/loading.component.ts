import {Component} from '@angular/core';

@Component({
    selector: 'loading',
    styleUrls: ['loading.css'],
    template: `
<div class="row mt50" style="height: 500px">
    <div class="col-md-12">
                <div class="cssload-loader"></div>
</div>
</div>
`
})
export class LoadingComponent {
}