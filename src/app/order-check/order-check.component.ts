import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'order-check',
  templateUrl: './order-check.component.html',
  styleUrls: ['./order-check.component.css']
})
export class OrderCheckComponent implements OnInit {

  // OrderCheckForm = new FormGroup({
  //   canSubmit: new FormControl(shoes.selectedOptions.selected.length === 0, Validators.required)
  // });

  constructor() { }

  ngOnInit(): void {
  }
  // @Output() hasFoodSelected = shoes.selectedOptions.selected.length === 0

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  
}
