import { Component, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../entity/product';
import { LoginService } from '../services/login.service';
import { CartService } from '../services/cart.service';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  product:Product = new Product
  productList:Product[]= []
  adminLoggedIn=false;
  userLoggedIn=false;

  search(productName:any){
    const promise = this.productService.getProductByName(productName);
      promise.subscribe((response) => {
        // console.log(response);
        this.productList= response as Product[];
        // console.log(this.productList);
      },
      error=>{
        alert(error.error+ ", Please enter valid productname");     
      }
      )
  }

  addProduct(){
    this.router.navigate(['/addproduct']);
  }
  
  updateProduct(product:any){
    console.log("main"+product)
    this.router.navigate(['/updateproduct'], {
      state: {
        data: product
      }});
  }

  addToCart(productId:any){
    this.cartService.addToCart(productId).subscribe((response:any) => {
      alert(response.message);
    },
    (error)=>{
      alert(error.error);
    }
    );
  }
  
  constructor(private router: Router, private productService: ProductService,
    private loginService:LoginService, private cartService:CartService) {}

  ngOnInit() {
    this.productService.getAllProduct().subscribe((response) => {
      this.productList= response as Product[];
    });

    if(this.loginService.getRoles()=='ROLE_ADMIN'){
      this.adminLoggedIn=true;
    } else if(this.loginService.getRoles()=='ROLE_USER'){
      this.userLoggedIn=true;
    }

  }
  
  deleteProduct(productId:any){
    this.productService.deleteProduct(productId).subscribe((response:any) => {
      alert(response.message);
      this.router.navigate(['home']);
    });
    
  }

  productHome(id) {
    this.router.navigate(['product/'+id]);
  }


}


