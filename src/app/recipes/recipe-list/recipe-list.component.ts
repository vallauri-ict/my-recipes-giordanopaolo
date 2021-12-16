import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipeModels } from 'src/app/models/recipe.models';
import { RecipesServiceService } from 'src/app/shared/recipes-service.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelectedInList = new EventEmitter<RecipeModels>();
  recipes: RecipeModels[] = []

  

  SelectedRecipe: RecipeModels;
  

  constructor(private recipeService:RecipesServiceService) {
    this.recipes = recipeService.recipes;
    this.SelectedRecipe = this.recipes[0];
   }

  ngOnInit(): void {
  }

  onRecipesSelected(recipe : RecipeModels){
    console.log(recipe)
    this.recipeSelectedInList.emit(recipe);
  }
}
