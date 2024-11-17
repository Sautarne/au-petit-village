import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from "../product/product.component";
import { ProductService } from '../services/product.service';
import { Product } from '../models';
import { FormsModule } from '@angular/forms';
import { ProductFilterPipe } from '../pipe/filter-by-name.pipe.ts.pipe';
import { PriceSortPipe } from '../pipe/sort-by-price.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,
            ProductComponent,
            FormsModule,
            ProductFilterPipe,
            PriceSortPipe
          ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  searchQuery: string = '';
  sortOrder: 'asc' | 'desc' | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getAllProducts();
  }

  sortByPrice() {
    switch(this.sortOrder) {
      case null:
        this.sortOrder = 'asc';
        break;
      case 'asc':
        this.sortOrder = 'desc';
        break;
      case 'desc':
        this.sortOrder = null;
        break;
    }
  }
}