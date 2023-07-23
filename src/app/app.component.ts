import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Pagintation } from './shared/models/paging';
import { Products } from './shared/models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ECommerceClient';

  constructor(private http: HttpClient) {}
  products: any[] = [];

  ngOnInit(): void {
    this.http.get<Pagintation<Products[]>>("https://localhost:7052/api/Product?PageSize=50").subscribe({
      next:(response)=>{
        console.log(response);
        this.products = response.data;

      },
      error:error=>console.log(error),
      complete:()=>{
        console.log("Request Completed");
      }
    })
  }
}
