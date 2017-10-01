import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Education } from '../../template/education';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
    selector: 'education',
    templateUrl: 'education.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EducationComponent {
    @Input() education: Education;
    constructor() {
    }
}
