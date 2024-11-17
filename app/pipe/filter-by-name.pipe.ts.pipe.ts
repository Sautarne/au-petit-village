import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models';

@Pipe({
  name: 'productFilter',
  standalone: true,
  pure: false
})
export class ProductFilterPipe implements PipeTransform {
  transform(products: Product[], searchQuery: string): Product[] {
    if (!products) return [];
    if (!searchQuery) return products;

    searchQuery = searchQuery.toLowerCase().trim();

    return products.filter(product =>
      product.name.toLowerCase().includes(searchQuery)
    );
  }
}