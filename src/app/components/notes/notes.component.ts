import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent {
  @Input({ alias: 'title', required: true }) title: string = 'title';
  @Input({ alias: 'style', required: true }) style: string = 'title';
}
