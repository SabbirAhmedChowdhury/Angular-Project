import { Recipe } from './../recipe.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('A test recipe', 'This is simply a test', 'https://get.pxhere.com/photo/dish-food-recipe-fast-food-cuisine-garnish-snacks-vegetarian-food-power-supply-appetizer-tidbits-side-dish-arancini-hors-d-oeuvre-finger-food-rissole-croquette-fried-food-pakora-chicken-nugget-american-food-esfiha-kibe-vetkoek-1375826.jpg')
    , new Recipe('Another test recipe', 'This is simply Another test', 'https://get.pxhere.com/photo/dish-food-recipe-fast-food-cuisine-garnish-snacks-vegetarian-food-power-supply-appetizer-tidbits-side-dish-arancini-hors-d-oeuvre-finger-food-rissole-croquette-fried-food-pakora-chicken-nugget-american-food-esfiha-kibe-vetkoek-1375826.jpg')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(event: Recipe) {
    this.recipeWasSelected.emit(event);
  }

}
