import { Component, OnInit } from '@angular/core';
import { ShoppingcartService } from './shoppingcart.service';


@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss']
})
export class ShoppingcartComponent implements OnInit {

  public list : any=[];
  public grandTotal: any;
  showdiscount: boolean= false;
  public newgrantotal: number = 0;
  gotclearancedisc: boolean= false;
  gotmemberdisc: boolean =false;
  constructor(private cartservice:ShoppingcartService) { }

  ngOnInit(): void {
    this.cartservice.getCart().subscribe(res=>{
      this.list = res;
      this.grandTotal = this.cartservice.getTotalPrice();
    })
  }
  removeItem(item){
    this.cartservice.removeCartItem(item);
  }
  applydiscount(){
    this.showdiscount= true;
  }
  applyClearanceDiscount(total){
    this.gotclearancedisc = true;
    if(this.newgrantotal == 0){
      this.newgrantotal =  this.cartservice.getClearanceDiscount(total);
    }
    else{
      this.newgrantotal =  this.cartservice.getClearanceDiscount(this.newgrantotal);
    }
    
    console.log(this.newgrantotal)
  }
  applyMemberDiscount(total){
    this.gotmemberdisc = true;
    if(this.newgrantotal == 0){
      this.newgrantotal =  this.cartservice.getMemberDiscount(total);
    }
    else{
      this.newgrantotal =  this.cartservice.getMemberDiscount(this.newgrantotal);
    }
    
    console.log(this.newgrantotal)
  }
}

