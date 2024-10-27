import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input({ alias: 'style', required: false }) style: string = '';
  @Input({ alias: 'type', required: false }) type: string = '';
  @Input({ alias: 'placeholder' }) placeholder: string = '';
  
  // @Input({ alias: 'style', required: false }) style: 'beige-light' | 'beige' = 'beige-light';
  // @Input({ alias: 'type', required: false }) type: 'text' | 'email' | 'password' = 'text';
}
