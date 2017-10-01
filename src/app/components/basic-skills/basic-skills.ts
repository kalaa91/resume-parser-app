import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { BasicSkills } from '../../template/basicSkills';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
    selector: 'basic-skills',
    templateUrl: 'basic-skills.html',
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class BasicSkillsComponent {
    @Input() basicSkills: BasicSkills;
    constructor() {
    }
}
