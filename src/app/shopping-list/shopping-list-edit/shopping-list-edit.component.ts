import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() newItemAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  AddToShoppingList() {
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.nameInputRef.nativeElement.value;
    const ingredient = new Ingredient(name, amount);
    this.newItemAdded.emit(ingredient);
  }
}
