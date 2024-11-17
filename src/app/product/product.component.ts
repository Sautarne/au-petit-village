// src/app/product/product.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { Product } from '../models';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  @Input() isDetail: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        const id = Number(params['id']);
        const foundProduct = this.productService.getProductById(id);
        if (foundProduct) {
          this.product = foundProduct;
          this.isDetail = true;
        }
      }
    });
  }

  viewDetails() {
    this.router.navigate(['/product', this.product.id]);
  }
}