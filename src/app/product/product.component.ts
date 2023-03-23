import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { products } from '../Model/product';
import { ProductService } from '../Service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productList:products[]=[]
  constructor(private productservice:ProductService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.productList=this.productservice.getProducts()
    console.log(this.productList)
  }
  nextChange(id:number){
    debugger
    this.productservice.getProduct(id);
    this.router.navigate(['/product',id]);
  }



}
