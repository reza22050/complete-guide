import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/Shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef | undefined;
  @ViewChild('amountInput') amountInputRef: ElementRef | undefined;

  constructor(private slService: ShoppingListService) {}

  onAddItem() {
    const ingName = this.nameInputRef?.nativeElement.value;
    const ingAmount = this.amountInputRef?.nativeElement.value;

    const newIngredient = new Ingredient(ingName, ingAmount);
    this.slService.addIngredient(newIngredient);
  }
}
