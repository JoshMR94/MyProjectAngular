import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe('Test Recipe', 'Test Description', 'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg'),
        new Recipe('Another Test Recipe', 'Another Test Description', 'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg')
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}