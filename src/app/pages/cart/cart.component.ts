import { Component,inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItemComponent } from './cart-item/cart-item.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent,OrderSummaryComponent],
  template: `
   <div>
    <h2>Shopping Cart</h2>
    @for(item of cartService.cart();track item.id){
    <app-cart-item [item]="item"/>
    }

    <app-order-summary />
   </div>
  `,
  styles: ``
})
export class CartComponent {
cartService=inject(CartService)
}
