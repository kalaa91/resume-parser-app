import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { MainInfo } from '../../template/mainInfo';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
    selector: 'main-info',
    templateUrl: 'main-info.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainInfoComponent {
    @Input() mainInfo: MainInfo;
    constructor() {
    }
}
