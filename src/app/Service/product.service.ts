import { Injectable } from '@angular/core';
import { products } from '../Model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 private productList:products[]=[
  new products(1,'Memory card',5000),
  new products(2,'Vivo',50000),
  new products(3,'Samsung',40000),
 ];
  constructor() { }

  getProducts(){
    return this.productList;
  }
  getProduct(id:number){
   let a= this.productList.filter((value)=>{
      let data=value.id==id;
      console.log(data);
      return data
    })
    console.log(a)
    return a;
  }

}