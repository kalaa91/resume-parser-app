import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Experince } from '../../template/experince';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
    selector: 'experience',
    templateUrl: 'experience.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent {
    @Input() experience: Experince[];
    constructor() {
    }
}
