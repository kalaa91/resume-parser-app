import { Injectable } from '@angular/core';
import { ResumeObject } from './template/resumeObj'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class JsonParserService {
    constructor(private http: HttpClient) {

    }
    getJsonObject(): Observable<ResumeObject> {
        return this.http.get<ResumeObject>('https://raw.githubusercontent.com/kalaa91/resume-parser-app/master/src/resumeTemplate.json');
    }

}