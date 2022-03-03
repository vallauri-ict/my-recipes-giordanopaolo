import { Injectable } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { RecipeModel } from './../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipes: RecipeModel[] = [];
  selectedRecipe: RecipeModel;

  constructor(private dataStorageService: DataStorageService, private router :Router) { }

  getRecipes() {
    this.dataStorageService.sendGetRequest('recipes').subscribe(
      data => {
        // console.log(data);
        this.recipes = data as RecipeModel[];
        // this.selectedRecipe = this.recipes[0];
      },
      error => {
        console.error(error);
      }
    )
  }
  postRecipe(recipe: RecipeModel) {
    this.dataStorageService.sendPostRequest('recipes', recipe).subscribe(
      data => {
        console.log(data);
        this.getRecipes();
      },
      error => {
        console.error(error);
      }
    )
  }

  patchRecipe(recipeId: number, recipe: RecipeModel) {
    this.dataStorageService.sendPatchtRequest('recipes/' + recipeId, recipe).subscribe(
      data => {
        alert("Recipe Modified");
        this.router.navigate(['/Recipes'])
      },
      error => {
        console.error(error);
      }
    )
  }

  getRecipe(index: any) {
    this.dataStorageService.sendGetRequest('recipes/' + index).subscribe(
      data => {
        this.selectedRecipe = data as RecipeModel;
      },
      error => {
        console.error(error);
      }
    )
  }
  deleteRecipe(id:any){
    this.dataStorageService.sendDeleteRequest('recipes/' + id).subscribe(
      data => {
        alert("recipe deleted");
        this.getRecipes();
        this.router.navigate(['/Recipes'])
      },
      error => {
        console.error(error);
      }
    )
  }

}
