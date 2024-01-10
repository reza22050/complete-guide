import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a recipe',
      'https://pngimg.com/d/letter_d_PNG13.png'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a recipe',
      'https://pngimg.com/d/letter_d_PNG13.png'
    ),
  ];
}
