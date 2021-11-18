import { Component, OnInit } from '@angular/core';
import { RecipeModels } from 'src/app/models/recipe.models';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : RecipeModels[] = [
    new RecipeModels(
      "Spaghetti alla chitarra",
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.buttalapasta.it%2Fricette%2Fricetta-spaghettichitarra-alluovo-con-ricotta-salsiccia-e-zafferano%2F19970%2F&psig=AOvVaw3wCZpkvS2y2cBFznjaGRom&ust=1637313403640000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJCA1P7KofQCFQAAAAAdAAAAABAJ",
      "Un piatto tipico abruzzese"
    ),
    new RecipeModels(
      "Lasagna al sugo bolognese",
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ricettedigusto.info%2Flasagne-alla-bolognese%2F&psig=AOvVaw1e31w4cOmM1bi5H35c_jhU&ust=1637313527633000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNj6k7vLofQCFQAAAAAdAAAAABAJ",
      "Una roba buona"
    ),
    new RecipeModels(
      "Gnocchia alla sorrentina",
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.giallozafferano.it%2Flacucinadiloredana%2Fgnocchi-alla-sorrentina%2F&psig=AOvVaw2OV3bkqHC2fUB5feh271sr&ust=1637313619186000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNCZzObLofQCFQAAAAAdAAAAABAD",
      "Ho tanta fame"
    ),
    new RecipeModels(
      "semifreddo al mascarpone",
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fclaudiafornaciari.it%2Fricette%2Fsemifreddo-al-mascarpone%2F&psig=AOvVaw3I0E8hvQYrr6d57ipwF193&ust=1637313734067000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKCRoKHMofQCFQAAAAAdAAAAABAD",
      "non so cosa scrivere"
    ),
    new RecipeModels(
      "Tiramisù",
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.foodsworld.it%2Fricette%2Fricetta-tiramisu-classico%2F&psig=AOvVaw15Qqrx_ZxJiJTBzLa39bX3&ust=1637313798196000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJDbxrvMofQCFQAAAAAdAAAAABAD",
      "Sò che ha i savoiardi, e i savoiardi sono buoni, quindi è buono"
    )
  ];

  SelectedRecipe: RecipeModels;
  

  constructor() {
    this.SelectedRecipe = this.recipes[2];
   }

  ngOnInit(): void {
  }

}
