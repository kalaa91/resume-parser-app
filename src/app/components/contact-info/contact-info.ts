import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ContactInfo } from '../../template/contactInfo';
import { Observable } from 'rxjs/Observable';
import { ResumeObject } from '../../template/resumeObj';
import 'rxjs/Rx';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'contact-info',
    templateUrl: 'contact-info.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactInfoComponent {
    @Input() contactInfo: ContactInfo[];
    constructor(private sanitizer:DomSanitizer) {
    }

    sanitize(url:string){
        return this.sanitizer.bypassSecurityTrustUrl(url);
    }
}
