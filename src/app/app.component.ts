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
  resumeObject: ResumeObject;
  constructor(private jsonParserService: JsonParserService) {
    jsonParserService.getJsonObject().take(1).subscribe(data => {
      this.resumeObject = data;
      console.log(data);
    });
  }

}
