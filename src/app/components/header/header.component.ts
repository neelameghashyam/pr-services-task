import { Component, inject, signal } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent,RouterLink],
  template: `
    <div class="header-container">
      <span routerLink="/"> My Store</span>
      <app-primary-button [label] = "'Cart('+cartService.cart().length+')'" 
      routerLink="/cart"
      />
    </div>
  `,
  styles: [`
    .header-container {
      background-color: #f8fafc; /* Tailwind's bg-slate-100 */
      padding: 12px 16px; /* Equivalent to px-4 py-3 */
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Equivalent to shadow-md */
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    span {
      font-weight: bold;
      font-size: 1.25rem;
    }
  `]
})
export class HeaderComponent {
  cartService =inject(CartService)
}
