import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IProducto } from '../../interfaces/iproducto';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() product!: IProducto;
  @Output() verDetalleOut = new EventEmitter<IProducto>();

  

  verDetalle() :void {
    this.verDetalleOut.emit(this.product);
  }
}
