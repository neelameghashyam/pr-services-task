import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.models';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  template: `
    <div class="container">
  <div class="row">
    @for (product of products(); track product.id) {
      <div class="col-12 col-md-6 col-lg-4 mb-4">
        <app-product-card [product]="product"></app-product-card>
      </div>
    }
  </div>
</div>

  `,
  styles: `
  .container {
      max-width: 5200px;
    }
    
  `
}) 
export class ProductsListComponent {
products=signal<Product[]>([
  { 
    id: 1,
    title: 'Fjallraven - Backpack',
    price: 109.95,
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    stock: 10,
  },
  {
    id: 2,
    title: 'Mens Casual T-Shirts ',
    price: 22.3,
    image:
      'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    stock: 0,
  },
  {
    id: 3,
    title: 'Mens Cotton Jacket',
    price: 55.99,

    image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    stock: 5,
  },
  {
    id: 4,
    title: 'Mens Casual Slim Fit',
    price: 15.99,
    image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    stock: 7,
  },
  { 
    id: 5,
    title: 'raven - Backpack',
    price: 110.99,
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    stock: 11,
  }
])
}

