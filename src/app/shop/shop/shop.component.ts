import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { Products } from 'src/app/shared/models/product';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  constructor(private shopService: ShopService){}

  products: Products[]= [];

  ngOnInit(): void {
    this.shopService.getProducts().subscribe({
      next:response=>this.products= response.data,
      error:error=> console.log(error)
    })
  }

}
