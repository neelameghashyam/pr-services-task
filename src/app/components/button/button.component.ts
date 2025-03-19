import { Component,input,output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <button (click)="btnClicked.emit()">
      {{ label() }}
    </button>
  `,
  styles: ``
})
export class ButtonComponent {
  label = input<string>(''); 

  btnClicked = output();
}
