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
    new IngredientsModels("Ciao mi chaimo apaolo",523),
    new IngredientsModels("Ciao mi chaimo apaolo",523)
  ]
  ngOnInit(): void {
  }

}
