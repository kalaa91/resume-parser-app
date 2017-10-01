import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
    selector: 'summary',
    templateUrl: 'summary.html'
})
export class SummaryComponent {
    @Input() summary: string;
    constructor() {
    }
}
