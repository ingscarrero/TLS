import { Product as TLSProduct } from '../@types';
import { Component } from '@angular/core';

export type AppAction = 'Ask' | 'Bid' | 'None';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TLS Auto Recycling';
  product: TLSProduct = { name: '1994 Toyota Camry Eng/motor Cont Mod - Ro - 109 - SKU: 590-56491' } as TLSProduct;
  action: AppAction;
  constructor() {
    this.action = 'None';
  }
  bid() {
    this.action = 'Bid';
  }
  ask() {
    this.action = 'Ask';
  }

  close() {
    this.action = 'None';
  }
}
