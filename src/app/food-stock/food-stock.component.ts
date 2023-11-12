import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodEditComponent } from './food-edit/food-edit.component';

@Component({
  selector: 'app-food-stock',
  standalone: true,
  imports: [
    CommonModule,
    FoodListComponent
  ],
  templateUrl: './food-stock.component.html',
  styleUrl: './food-stock.component.css'
})
export class FoodStockComponent {

}
