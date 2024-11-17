import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models';

@Pipe({
  name: 'priceSort',
  standalone: true,
  pure: false
})
export class PriceSortPipe implements PipeTransform {
  transform(products: Product[], sortOrder: 'asc' | 'desc' | null): Product[] {
    if (!products || !sortOrder) return products;

    return [...products].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  }
}