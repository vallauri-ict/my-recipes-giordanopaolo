import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IngredientsModels } from 'src/app/models/ingredients.models';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<IngredientsModels>();
  constructor() { }
  ingredientName:string ='';
  ingredientAmount:number = 0;

  ngOnInit(): void {
  }

  addIngredient(){
    if(this.ingredientAmount>0){
      const ingredient: IngredientsModels = new IngredientsModels(this.ingredientName, this.ingredientAmount)
      this.ingredientAdded.emit(ingredient);
    }
    else alert("ingredientAmount cant be 0")
  }
}
