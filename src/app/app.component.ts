import { Component } from '@angular/core';
import { MetaService } from './meta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-mentoring';

  constructor(private metaService: MetaService) {

  }

 

}
