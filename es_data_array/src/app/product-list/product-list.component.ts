import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../app.interfaces';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [
    { id: 1, name: 'Smartphone', price: 599.99, description: 'Ultimo modello con fotocamera avanzata' },
    { id: 2, name: 'Laptop', price: 999.99, description: 'Portatile leggero e potente' },
    { id: 3, name: 'Cuffie Wireless', price: 149.99, description: 'Audio di alta qualità senza fili' },
    { id: 4, name: 'Smartwatch', price: 249.99, description: 'Monitoraggio attività e notifiche' },
    { id: 5, name: 'Tablet', price: 349.99, description: 'Schermo grande per lavoro e intrattenimento' }
  ];

  selectedProduct: Product | null = null;
  newProduct = {id: 0, name: '', price: 0.0, description: ''};

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  onDelete(productId: number): void {
    this.products = this.products.filter(p => p.id !== productId);
  }

  onSubmit(): void {
    const newId = Math.max(...this.products.map(p => p.id), 0) + 1;
    this.newProduct.id = newId;
    this.products.push({...this.newProduct});
    this.newProduct = { id: 0, name: '', price: 0, description: '' };
  }
}