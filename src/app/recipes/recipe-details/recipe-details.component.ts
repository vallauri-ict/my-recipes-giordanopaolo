import { Component, Input, OnInit } from '@angular/core';
import { RecipeModels } from 'src/app/models/recipe.models';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  @Input() recipe !: RecipeModels;
  constructor() { }

  ngOnInit(): void {
    console.log(this.recipe)
  }

}
