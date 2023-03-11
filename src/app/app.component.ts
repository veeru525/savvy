import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mySchool';
  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});
}
