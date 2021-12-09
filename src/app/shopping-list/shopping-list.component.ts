import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { IngredientsModels } from 'src/app/models/ingredients.models';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor() { }

  ingredients:IngredientsModels[]=[
    new IngredientsModels("Ciao mi chaimo Paolo",523),
    new IngredientsModels("Ciao mi chaimo Baka Bibi",1024)
  ]
  ngOnInit(): void {
  }
  oningredientAdded(newIngredient:IngredientsModels){
    let ingredientFound = false;
    for (const item of this.ingredients) {
      if(item.name = newIngredient.name)
      {
        ingredientFound=true;
        item.amount +=newIngredient.amount;
      }
    }
    if(!ingredientFound){
      this.ingredients.push(newIngredient)
    }

    
  }

}
