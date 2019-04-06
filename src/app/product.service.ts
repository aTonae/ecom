import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor( private http: HttpClient) { }

  getdata(){
    return [

      {
        "name":"Dell Computer",
        "image":"https://brain-images-ssl.cdn.dixons.com/2/1/10167312/u_10167312.jpg",
        "detail":"Dell custom pc for house work",
        "price":50000
      },
      {
        "name":"Macbook",
        "image":"https://images-na.ssl-images-amazon.com/images/I/51FQpz-zY1L._SX679_.jpg",
        "detail":"Dell custom pc for house work",
        "price":60000
      },
      {
        "name":"Asus Computer",
        "image":"https://m.media-amazon.com/images/I/71DvG2FjM+L._SR500,500_.jpg",
        "detail":"Dell custom pc for house work",
        "price":70000
      },
      {
        "name":"HP Computer",
        "image":"https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c06083279.png",
        "detail":"Dell custom pc for house work",
        "price":40000
      },
      {
        "name":"Lenovo Computer",
        "image":"https://brain-images-ssl.cdn.dixons.com/4/6/10180764/u_10180764.jpg",
        "detail":"Dell custom pc for house work",
        "price":55000
      },
      {
        "name":"Sony Computer",
        "image":"https://www.sony.co.in/image/4c86f951ca2c0e3e8ce9bd07fdd654d3?fmt=pjpeg&resMode=bisharp&wid=354",
        "detail":"Dell custom pc for house work",
        "price":51000
      }
    ];
  }

  getRemoteUsers(){

  return  this.http.get("https://jsonplaceholder.typicode.com/users");

  }

}
