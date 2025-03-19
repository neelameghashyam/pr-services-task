import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';

@Component({
  selector: 'app-order-summary',
  imports: [PrimaryButtonComponent],
  template: `
    <div class="order-summary card p-4 shadow-sm">
  <h2 class="order-summary-title mb-4">Order Summary</h2>
  
  <div class="d-flex justify-content-between mb-3">
    <span class="fw-bold">Total:</span>
    <span class="order-summary-total">{{ '$ ' + total() }}</span>
  </div>
  
  <div class="text-center">
    <app-primary-button label="Proceed to checkout" class=" btn-primary btn-block" />
  </div>
</div>

  `,
  styles: `
  .order-summary {
  background-color: #fff; /* White background for the card */
  border-radius: 10px; /* Rounded corners */
  max-width: 400px; /* Set a max width for the order summary */
  margin: 0 auto; /* Center the order summary */
}

.order-summary-title {
  font-size: 1.5rem;
  text-align: center;
}

.order-summary-total {
  font-size: 1.25rem;
  color: #28a745; /* Bootstrap success color */
}

.btn-block {
  width: 100%; /* Make the button fill the width */
}
`
})
export class OrderSummaryComponent {
cartService=inject(CartService)

total = computed(() => {
  let total = 0;
  for (const item of this.cartService.cart()) {
    total += item.price;
  }

  return total;
});
}


