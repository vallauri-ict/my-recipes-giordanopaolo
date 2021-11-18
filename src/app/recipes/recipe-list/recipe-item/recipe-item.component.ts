import { Component, Input, OnInit } from '@angular/core';
import { RecipeModels } from 'src/app/models/recipe.models';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe !: RecipeModels;
  constructor() { }

  ngOnInit(): void {
  }

}
