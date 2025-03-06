import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../../services/product-service.service';
import { IProducto } from '../../interfaces/iproducto';


@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent implements OnInit {

  product!: IProducto;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    const _id = this.route.snapshot.paramMap.get('_id')!;
    this.productService.getById(_id).subscribe(data => {
      this.product = data;
    });
  }

  volverAlaLista(): void{
    this.router.navigate(['home']);
   }

}
