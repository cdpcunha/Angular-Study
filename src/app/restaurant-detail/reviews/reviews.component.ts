import { Component, OnInit } from '@angular/core';
import { RestaurantService} from '../../restaurants/restaurants.service'
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs/Observable'
@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  constructor(private restaurantService: RestaurantService, private route: ActivatedRoute) { }

  reviews: Observable<any>

  ngOnInit() {
    this.reviews = this.restaurantService.reviewsOfrestaurant(this.route.parent.snapshot.params['id'])
  }

}
