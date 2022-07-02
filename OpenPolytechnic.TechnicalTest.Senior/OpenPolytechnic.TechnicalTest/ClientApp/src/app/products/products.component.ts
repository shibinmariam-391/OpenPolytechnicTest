import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { Products } from '../productlist';
import { ShoppingcartService } from '../shoppingcart/shoppingcart.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  newProduct: any;
  AllProducts: any;
  totalItems : number = 0;

  constructor(private api:ApiServiceService, private cartservice: ShoppingcartService, private route: Router) { }

  ngOnInit() {
    this.api.get().subscribe(res=>{
      this.AllProducts = res;

      console.log(this.AllProducts)
      this.AllProducts.forEach(x=> {
        Object.assign(x,{quantity: 1,total: x.Price});
      });
    })

    this.cartservice.getCart().subscribe(res=>{
      this.totalItems = res.length;
    })
    
  }

  addtocart(item){
    this.cartservice.addToCart(item);
  }
}

