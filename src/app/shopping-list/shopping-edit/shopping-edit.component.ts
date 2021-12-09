import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor() { }
  ingredientName:string ='';
  ingredientAmount:number = 0;

  ngOnInit(): void {
  }

  addIngredient(){
    console.log(this.ingredientName, this.ingredientAmount)
  }
}
