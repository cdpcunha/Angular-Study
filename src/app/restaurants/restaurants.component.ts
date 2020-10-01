import { Component, OnInit } from '@angular/core';
import {Restaurant} from "./restaurant/restaurant.model";
import {RestaurantService} from "./restaurants.service"

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})

export class RestaurantsComponent implements OnInit {

  constructor(private restaurantService: RestaurantService) { }

  restaurants: Restaurant[] 

  ngOnInit(){
    this.restaurantService.returnRestaurants().subscribe(restaurants => this.restaurants = restaurants)
  }
}
