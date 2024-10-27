import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    inputStyle: string = 'beige-light';
    inputType: string = 'text';
    inputPlaceholder: string = 'Name:';

    cardTitle1: string = 'Monday';
    cardTitle2: string = 'Tuesday';
    cardTitle3: string = 'Wednesday';
    cardTitle4: string = 'Thursday';
    cardTitle5: string = 'Friday';
    cardTitle6: string = 'Saturday';

    cardStyle1: string = 'beige-light';
    cardStyle2: string = 'beige';
    cardStyle3: string = 'beige-light';
    cardStyle4: string = 'beige';
    cardStyle5: string = 'beige-light';
    cardStyle6: string = 'beige';

    notesTitle: string = 'Notes';

    notesStyle: string = 'beige';
}
