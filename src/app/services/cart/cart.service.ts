import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cart = new BehaviorSubject<any>(null);

  get cart(){
    return this._cart.asObservable();
  }

  constructor() { }

  addQuantity(items: any){
    
  }
}
