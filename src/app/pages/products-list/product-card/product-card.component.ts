import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/products.models';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent],
  template: `
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" [src]="product().image" alt="{{ product().title }}">
      <div class="card-body">
        <h5 class="card-title">{{ product().title }}</h5>
        <p class="card-text">
          <strong>Price:</strong> \${{ product().price }}
        </p>
        <p [style.color]="product().stock ? 'green' : 'red'">
          {{ product().stock ? product().stock +" left" : 'Out of Stock' }}
        </p>
       <app-primary-button
          label="Add to Cart"
          (btnClicked)="cartService.addToCart(product())"
        />
      </div>
    </div>
  `,
  styles: [`
    .card {
      margin: 10px;
      border: 1px solid #dee2e6;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .card-img-top {
      height: 300px;
      object-fit: auto;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }

    .card-title {
      font-size: 1.25rem;
      font-weight: bold;
    }

    .card-text {
      margin-bottom: 8px;
    }
  `]
})
export class ProductCardComponent {
  cartService=inject(CartService)

   product = input.required<Product>();
}
