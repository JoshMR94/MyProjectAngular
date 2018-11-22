import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();

    //now I'm informing my array that the ingredients has been updated in the service
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredientsArr: Ingredient[]) => {
        this.ingredients = ingredientsArr;
      }
    )
  }
  
}
