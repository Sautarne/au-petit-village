import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Figurine Astérix',
      description: 'Magnifique figurine d\'Astérix le Gaulois, peinte à la main.',
      price: 39.99,
      imageUrl: 'products/casque astérix.jpg'
    },
    {
      id: 2,
      name: 'Figurine Obélix',
      description: 'Figurine artisanale d\'Obélix avec son fidèle Idéfix.',
      price: 44.99,
      imageUrl: 'products/Casque obelix.webp'
    },
    {
      id: 3,
      name: 'Bouclier gaulois',
      description: 'Authentique bouclier du chef Gaulois',
      price: 79.99,
      imageUrl: 'products/bouclier.jpg'
    },
    {
      id: 4,
      name: 'Gourde gauloise',
      description: 'Une gourde gauloise pour transporter votre potion magique',
      price: 26.99,
      imageUrl: 'products/gourde.jpg'
    },
    {
      id: 5,
      name: 'maquette de maison gauloise',
      description: 'Une maison rustique d\'un habitant gaulois',
      price: 84.99,
      imageUrl: 'products/Maison.jpg'
    },
    {
      id: 6,
      name: 'Mug obélix',
      description: 'Un mug pour commencer la journée plein de pouvoir magique',
      price: 24.99,
      imageUrl: 'products/mug obélix.jpg'
    }
  ];

  private selectedProductSubject = new BehaviorSubject<Product | null>(null);

  getAllProducts(): Product[] {
    return [...this.products];
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }

  setSelectedProduct(product: Product): void {
    this.selectedProductSubject.next(product);
  }

  getSelectedProduct(): Observable<Product | null> {
    return this.selectedProductSubject.asObservable();
  }
}