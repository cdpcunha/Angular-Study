import { Injectable } from '@angular/core';
import { CartItem } from '../shopping-cart/cart-item.model'
import { MenuItem } from '../menu-item/menu-item.model'

@Injectable()
export class ShoppingCartService {

  items: CartItem[] = []

  clear(){
    this.items = []
  }

  addItem(item: MenuItem){
    let foundItem = this.items.find((mItem)=> mItem.menuItem.id === item.id)
    if(foundItem){
      foundItem.quantity = foundItem.quantity +1
    } else{
      this.items.push(new CartItem(item))
    }
  }

  removeItem(item: CartItem){
    this.items.splice(this.items.indexOf(item), 1)
  }

  total(): number{
    return this.items.map(item => item.totalValue()).reduce((prev,value) => prev+value , 0)
  }

}
