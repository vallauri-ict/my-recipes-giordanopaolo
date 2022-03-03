import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from 'src/app/shared/recipe.service';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  constructor(
    public recipeService: RecipeService,
    private shoppingList: ShoppingListService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        // console.log(params);
        let recipeId = params['id'];
        this.recipeService.getRecipe(recipeId);
      }
    )
    // Sintassi alternativa
    // let recipeId = this.activatedRoute.snapshot.paramMap.get("id");
    // this.recipeService.getRecipe(recipeId);
  }

  sendToShoppingList = (): void => {
    this.shoppingList.addIngredients(this.recipeService.selectedRecipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.activatedRoute });
  }
  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.recipeService.selectedRecipe.id);
  }

}
