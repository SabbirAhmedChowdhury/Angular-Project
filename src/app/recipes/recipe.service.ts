import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        // tslint:disable-next-line:max-line-length
        new Recipe('Beef Burger',
                'This is a test burger', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Jumbo_Burger_The_Home_Chef_India.jpg/800px-Jumbo_Burger_The_Home_Chef_India.jpg',
        [
            new Ingredient('meat', 5),
            new Ingredient('bread', 2)
        ])
        // tslint:disable-next-line:max-line-length
        , new Recipe('Special Pizza',
        'This is simply Another test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Supreme_pizza.png/800px-Supreme_pizza.png',
        [
            new Ingredient('bread', 1),
            new Ingredient('beans', 20)
        ])
      ];

    constructor(private shoppingListService: ShoppingListService) {}

    public getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}
