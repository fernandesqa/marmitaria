import { EventEmitter, Injectable } from "@angular/core";
import { PackedLunch } from "./packed-lunch-list/packed-lunch-list.model";
import { Food } from "../shared/food.model";
import { FoodListService } from "../food-stock/food-list/food-list.service";

@Injectable()
export class LunchboxesService {

    packedLunchSelected = new EventEmitter<PackedLunch>();
    
    private lunchboxes: PackedLunch[] = [
        new PackedLunch(
            'Churrasco', 
            'Churrasco de Picanha', 
            'https://blog.biglar.com.br/wp-content/uploads/2021/05/shutterstock_148296899.jpg',
            [
                new Food('Picanha', 1), 
                new Food('Sal', 1)
            ]
            ),
        new PackedLunch(
            'Salmão Grelhado', 
            'Uma delícia', 
            'https://www.dicasdemulher.com.br/wp-content/uploads/2020/01/salmao-grelhado-0.png',
            [
                new Food('Salmão', 1), 
                new Food('Sal', 1)
            ]
            )
      ];

    
    constructor(private foodListService: FoodListService) {}
    getLunchboxes() {
        return this.lunchboxes.slice();
    }

    addIngredientsToFoodList(ingredients: Food[]) {
        this.foodListService.addIngredients(ingredients);
    }
}