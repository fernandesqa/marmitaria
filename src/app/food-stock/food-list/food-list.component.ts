import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodEditComponent } from '../food-edit/food-edit.component';

@Component({
  selector: 'app-food-list',
  standalone: true,
  imports: [
    CommonModule,
    FoodEditComponent
  ],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.css'
})
export class FoodListComponent {

}
