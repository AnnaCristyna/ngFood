import { Component, OnInit } from '@angular/core';
import { FoodItem, FoodService } from '../food.service'

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  foodList: FoodItem[] = [];
  categories: string[] = [];

  constructor(private FoodService: FoodService) { }

  ngOnInit(): void {
    this.FoodService.getFoodList().subscribe( item => this.foodList = item)
  }
  
  ngOnChange(changes: this.foodList): void {

  }

  Map() {
    this.foodList.forEach(item => {
      const hasCategory = this.categories.includes(item.categoria)
      if (!hasCategory) {
        this.categories = [...this.categories, item.categoria]
      } 
    })
    console.log(this.categories);
    
  }

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
}
