import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe('Test Recipe',
        'Test Description', 
        'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg',
        [
            new Ingredient("Cheese", 2),
            new Ingredient("Meat", 3)
        ]
        ),
        new Recipe('Another Test Recipe',
        'Another Test Description', 
        'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg',
        [
            new Ingredient("Bread", 4),
            new Ingredient("Meat", 5)
        ]
        )
    ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}