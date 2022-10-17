import { Injectable } from '@angular/core';
import { timeout, delay } from 'q';
import { Observable, of } from 'rxjs';
import { LoadingService } from './loading.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../entity/product';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private loadingService: LoadingService, private http:HttpClient, 
    private loginService:LoginService) { }

  getProductByName(productName:string){     
    return this.http.get("http://localhost:8090/api/shopping/product/search/"+productName);
  }

  getAllProduct(){     
    return this.http.get("http://localhost:8090/api/shopping/all");
  }

  addProduct(product:Product){
    product.features=["og"];
    return this.http.post("http://localhost:8090/api/shopping/product/add",product, {headers: new HttpHeaders(
      {
        'Authorization': `Bearer ${this.loginService.getToken()}`,
      })});
  }

  updateProduct(product:Product){
    product.features=["og"];
    return this.http.post("http://localhost:8090/api/shopping/product/update"+product.id, product, {headers: new HttpHeaders(
      {
        'Authorization': `Bearer ${this.loginService.getToken()}`,
      })});
  }

  products = [
    {
      id: 1,
      text: "Everfresh Flowers",
      image: ["https://image.cnbcfm.com/api/v1/image/105680013-1547583426762nike1.jpg?v=1547583682"]
    },
    {
      id: 2,
      text: "Festive Deer",
      image: ["https://sc02.alicdn.com/kf/HTB1DRCma0fvK1RjSszhq6AcGFXaZ.jpg"]
    },
    {
      id: 3,
      text: "Morning Greens",
      image: ["https://images-na.ssl-images-amazon.com/images/I/61tBQKJJKaL._SL1500_.jpg"]
    },
    {
      id: 4,
      text: "Everfresh Flowers",
      image: ["https://i.pinimg.com/236x/36/9f/4c/369f4c4013e19c9b3c671de3dc696d2b.jpg"]
    },
    {
      id: 5,
      text: "Festive Deer",
      image: ["https://cdn140.picsart.com/268948212025211.png?r1024x1024"]
    },
    {
      id: 6,
      text: "Everfresh Flowers",
      image: ["https://i.pinimg.com/236x/36/9f/4c/369f4c4013e19c9b3c671de3dc696d2b.jpg"]
    },
    {
      id: 7,
      text: "Festive Deer",
      image: ["https://cdn140.picsart.com/268948212025211.png?r1024x1024"]
    },
    {
      id: 8,
      text: "Morning Greens",
      image: ["http://pngimg.com/uploads/running_shoes/running_shoes_PNG5827.png"]
    },
    {
      id: 9,
      text: "Everfresh Flowers",
      image: ["http://pngimg.com/uploads/dress_shirt/dress_shirt_PNG8109.png"]
    },
    {
      id: 10,
      text: "Festive Deer",
      image: ["https://cdn140.picsart.com/268948212025211.png?r1024x1024"]
    },
    {
      id: 11,
      text: "Morning Greens",
      image: ["http://pluspng.com/img-png/shoes-png-sneaker-png-transparent-image-2500.png"]
    },
    {
      id: 12,
      text: "Everfresh Flowers",
      image: ["https://images-na.ssl-images-amazon.com/images/I/61tBQKJJKaL._SL1500_.jpg"]
    },
    {
      id: 13,
      text: "Festive Deer",
      image: ["https://cdn140.picsart.com/268948212025211.png?r1024x1024"]
    },
    {
      id: 14,
      text: "Everfresh Flowers",
      image: ["https://i.pinimg.com/236x/36/9f/4c/369f4c4013e19c9b3c671de3dc696d2b.jpg"]
    },

  ];


  simillarProducts = [
    {
      id: 1,
      text: "Everfresh Flowers",
      image: ["https://ledscreensandlights.com/wp-content/uploads/2018/08/9.gif"]
    },
    {
      id: 2,
      text: "Festive Deer",
      image: ["https://cdn140.picsart.com/268948212025211.png?r1024x1024"]
    },
    {
      id: 3,
      text: "Morning Greens",
      image: ["http://pluspng.com/img-png/shoes-png-sneaker-png-transparent-image-2500.png"]
    },
    {
      id: 4,
      text: "Everfresh Flowers",
      image: ["https://i.pinimg.com/236x/36/9f/4c/369f4c4013e19c9b3c671de3dc696d2b.jpg"]
    },
  ];

  getAllProducts(): any {
    return this.products;
  }

  getSimillarProducts(): any {
    return this.simillarProducts;
  }

  public getSingleProduct(id: number): Observable<any> {
    let temp: any;
    this.products.forEach(element => {
      if (element.id == id) {
            temp = element;
      }
    });
    const loading = false;
    this.loadingService.progressEnable.next(loading);
    return new Observable((observer) => observer.next(temp));
  }
}
