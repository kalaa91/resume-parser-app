import { Component } from '@angular/core';
import { ResumeObject } from './template/resumeObj'
import { JsonParserService } from './jsonparser.service'
import { Observable } from 'rxjs'
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [JsonParserService]
})
export class AppComponent {
  title = 'app';
  resumeObject$: Observable<ResumeObject>;
  constructor(private jsonParserService: JsonParserService) {
    this.resumeObject$ = jsonParserService.getJsonObject();
  }

}
