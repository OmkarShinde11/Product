import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { products } from 'src/app/Model/product';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList:products[]=[];
  constructor(private productservice:ProductService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    // const id=this.route.snapshot.params['id'];
    this.route.params.subscribe((data:Params)=>{
      this.productList=this.productservice.getProduct(data['id']);
    })
  }
  onEdit(id:number,name:string,price:number){
    this.router.navigate(['/product',id,name,price],)
  }

}
