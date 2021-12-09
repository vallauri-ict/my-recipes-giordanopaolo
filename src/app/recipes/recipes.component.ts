import { Component, Input, OnInit } from '@angular/core';
import { RecipeModels } from '../models/recipe.models';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  constructor() { }
  @Input() selectedRecipe !: RecipeModels;
  ngOnInit(): void {
  }

}
