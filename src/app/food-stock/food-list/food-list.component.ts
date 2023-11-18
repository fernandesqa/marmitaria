import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodEditComponent } from '../food-edit/food-edit.component';
import { Food } from '../../shared/food.model';
import { FoodListService } from './food-list.service';
import { Subscription } from 'rxjs';

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
export class FoodListComponent implements OnInit, OnDestroy {

  foodList!: Food[];
  subscription: Subscription = new Subscription();

  constructor(private foodListService: FoodListService) {}

  ngOnInit(): void {
      this.foodList = this.foodListService.getFoodList();
      this.subscription = this.foodListService.foodsChanged.subscribe((foods: Food[]) =>{
        this.foodList = foods;
      })
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

}
