import { Component, inject } from '@angular/core';
import { Router } from '@angular/router'; 
import { ProductServiceService } from '../../services/product-service.service';
import { ProductCardComponent } from "../product-card/product-card.component";
import { IProducto } from '../../interfaces/iproducto';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  ruta = inject(Router);
  ProductService = inject (ProductServiceService);
  products: IProducto[] = [];

  
  
  ngOnInit(): void {
    this.cargarProductos();
  }
  
  cargarProductos(): void {
    this.ProductService.getAll().subscribe({
      next: (products) => {
        this.products = products;
      },
      error: (error) => {
        console.error('Error cargando productos:', error);
        alert('Error al cargar productos. Ver consola para detalles.');
      }
    });
  }
  
  
  verDetalle(product: IProducto): void {
    this.ruta.navigate(['/producto', product._id]); 
  }}
