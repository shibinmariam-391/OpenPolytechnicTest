import { Injectable } from '@angular/core';
import { Products } from '../productlist';
import { HttpClient } from '@angular/common/http'; 
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingcartService {

  public cartItemList : any=[];
  public productList = new BehaviorSubject<any>([]);

  constructor() { }
  
  getCart(){
    return this.productList.asObservable();
  }
  setCart(item: any){
    this.cartItemList.push(...item);
    this.productList.next(item);
  }
  addToCart(item: any){
    this.cartItemList.push(item);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }
  getTotalPrice(){
    let total=0;
    this.cartItemList.map((x)=>{
      total +=x.Price;
    })
    return total;
  }
  removeCartItem(item: any){
    console.log("Remove Item",item)
    this.cartItemList.map((x,i)=>{
      if(item.id === x.id){
        this.cartItemList.splice(i,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  getClearanceDiscount(total){
    let discount:any;
    discount =(0.1 * total);
    total = total-discount;
    return total.toFixed(2);
  }
  getMemberDiscount(total){
    let discount: any;
    discount= (0.05 * total);
    total= total - discount
    return total.toFixed(2);
  }
}

