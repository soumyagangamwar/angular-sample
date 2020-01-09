import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private meta: Meta) {
    
    // this.meta.addTag({ name: 'description', content: 'How to use Angular 4 meta service' });
    // this.meta.addTag({ name: 'description', content: 'How to use Angular 4 meta service' },true);
    // this.meta.addTag({ name: 'author', content: 'talkingdotnet' });
    // this.meta.addTag({ name: 'author', content: 'talkingdotnet' });
  }

  ngOnInit() {
  }

  updateMeta () {
    this.meta.updateTag({ name: 'viewport', content: 'width=device-width, initial-scale=2' });
  }

}
