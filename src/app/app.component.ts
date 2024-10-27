import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    inputStyle: string = 'beige-light';
    inputType: string = 'text';
    inputPlaceholder: string = 'Name: '
}
