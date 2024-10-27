import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({ alias: 'style', required: true }) style: string = 'beige-light';
  @Input({ alias: 'title', required: true }) title: string = 'title';
}
