import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Ingredient } from './../../shared/ingredient.model';
import { ShoppingListService } from './../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  private subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedIngredient: Ingredient;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing
      .subscribe((index:number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedIngredient = this.shoppingListService.getIngredient(index);
          this.slForm.setValue({
            name: this.editedIngredient.name,
            amount: this.editedIngredient.amount
          })
      })
  }

  onSubmit(form : NgForm) {
    const value = form.value;
    const ingredient = new Ingredient(value.name, value.amount);
    if(this.editMode){
      this.shoppingListService.updateIngredient(this.editedItemIndex,ingredient);
    }else{
      this.shoppingListService.addIngredient(ingredient);
    }
    this.onClear();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
