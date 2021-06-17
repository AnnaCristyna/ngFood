import { Component, OnInit, Input } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'order-check',
  templateUrl: './order-check.component.html',
  styleUrls: ['./order-check.component.css']
})
export class OrderCheckComponent implements OnInit {

  // OrderCheckForm = new FormGroup({
  //   canSubmit: new FormControl(shoes.selectedOptions.selected.length === 0, Validators.required)
  // });
  item;

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe(item =>  {
      console.log(item);
      this.item = { ...item};
    })
  }
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
}
