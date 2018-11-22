import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {

    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient("Apples", 5),
        new Ingredient("Meat", 3),
        new Ingredient("Pears", 4),
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice())
    }

    addIngredients(ingredients: Ingredient[]) {
        /*
        for (let ingredient of ingredients) {
            this.addIngredient(ingredient);
        }
        */
       //... spread operator. Permits to propagate elements that can be iterable, separating their elements.
       //Allows us to basically turn an array of elements in a list of elements
       //In this case, push inserts every one of the elements in ingredients array to other array
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}