import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ExtraActivity } from '../../template/extraActivity';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
    selector: 'extra-activities',
    templateUrl: 'extra-activities.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExtraActivitiesComponent {
    @Input() extraActivity: ExtraActivity;
    constructor() {
    }
}
