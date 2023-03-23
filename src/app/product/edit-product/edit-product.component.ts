import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, CanDeactivate, Params, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { deActivate } from 'src/app/Guards/de-activate.guard';
import { products } from 'src/app/Model/product';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit{
  productId:number;
  productName:string;
  productPrice:number;
  productList:products[]=[];
  constructor(private router:Router,private route:ActivatedRoute,private productservice:ProductService) { }

  ngOnInit(): void {
    // this.route.params.subscribe((value:Params)=>{
    //   this.productId=value['id'];
    //   this.productName=value['name'];
    //   this.productPrice=value['price']
    // })
    const id=this.route.snapshot.params['id'];
    console.log(id)
    this.productList=this.productservice.getProduct(id);
    console.log(this.productList);
    this.productId=this.productList[0].id;
    this.productName=this.productList[0].name;
    this.productPrice=this.productList[0].price;
    // console.log(this.productId)
    // this.productName=this.productList[id].name;
    // this.productPrice=this.productList[id].price;

  }
  onUpdate(){
    this.route.params.subscribe((data:Params)=>{
      debugger
      if(this.productId!=data['id'] || this.productName!=data['name'] || this.productPrice!=data['price']){
        confirm('Wait');
      }
      else{
        console.log("Original value"+this.productId)
        console.log("Original value"+this.productName)
        console.log("Original value"+this.productPrice)
      }
    })
   this.router.navigate(['/product',this.productId])
   }
  canDeactivate():Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean {
    if(this.productId!=this.productList[0].id || this.productName!=this.productList[0].name|| this.productPrice!=this.productList[0].price){
      return confirm('Do you want to leave the page')
    }  
    else{
      return true
    }
    
  }

}
