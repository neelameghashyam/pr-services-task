import { Component,inject,input } from '@angular/core';
import { Product } from '../../../models/products.models';
import { ButtonComponent } from '../../../components/button/button.component';
import { CartService } from '../../../services/cart.service';
@Component({
  selector: 'app-cart-item',
  imports: [ButtonComponent],
  template: `
    <div class="cart-item d-flex align-items-center p-3 mb-3 border rounded shadow-sm">
  <div class="cart-item-image me-3">
    <img [src]="item().image" class="img-fluid rounded" alt="Product Image" style="max-width: 100px;">
  </div>
  <div class="cart-item-details flex-grow-1">
    <h5 class="cart-item-title mb-1">{{ item().title }}</h5>
    <p class="cart-item-price text-muted">{{ "$" + item().price }}</p>
  </div>
  <div class="cart-item-actions">
    <app-button label="Remove" (btnClicked)="cartService.removeFromCart(item().id)" class="btn btn-danger"/>
  </div>
</div>

  `,
  styles: `
  .cart-item {
  background-color: #fff; /* White background */
}

.cart-item-image img {
  max-width: 100px; /* Image size limit */
}

.cart-item-title {
  font-size: 1.1rem; /* Adjust the title font size */
}

.cart-item-price {
  font-size: 1rem; /* Adjust price font size */
}

.cart-item-actions {
  display: flex;
  align-items: center;
}

  `
})
export class CartItemComponent {
item=input.required<Product>()

cartService= inject(CartService)
}
