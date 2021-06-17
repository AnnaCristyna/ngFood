import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FoodItem, FoodService } from '../food.service'
import { Router} from '@angular/router';


@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  foodList: FoodItem[] = [];
  selectedFood: string[] = [];
  categories: string[] = [];

  constructor(private router: Router, private FoodService: FoodService) { }

  ngOnInit(): void {
    this.FoodService.getFoodList().subscribe( item => this.foodList = item )
  }
   
  onGoToOrderList(foodSelected: object) {
    console.log(foodSelected);

    this.router.navigate(['/check'], {queryParams: foodSelected})
  }

  // Map() {
  //   this.foodList.forEach(item => {
  //     const hasCategory = this.categories.includes(item.categoria)
  //     if (!hasCategory) {
  //       this.categories = [...this.categories, item.categoria]
  //     } 
  //   })
  //   console.log(this.categories);
    
  // }
}
