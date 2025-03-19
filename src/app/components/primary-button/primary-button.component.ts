import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  template: `
    <button (click)="btnClicked.emit()">
      {{ label() }}
    </button>
  `,
  styles: [`
    button {
      background-color: #3b82f6; /* Tailwind's bg-blue-500 */
      color: white;
      padding: 8px 16px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
    }

    button:hover {
      background-color: #2563eb; /* Tailwind's bg-blue-600 */
    }
  `]
})
export class PrimaryButtonComponent {
  label = input<string>(''); 

  btnClicked = output();
}
