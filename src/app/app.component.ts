import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LunchboxesComponent } from './lunchboxes/lunchboxes.component';
import { FoodStockComponent } from './food-stock/food-stock.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { FoodListService } from './food-stock/food-list/food-list.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    HeaderComponent,
    LunchboxesComponent,
    FoodStockComponent,
    DropdownDirective
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FoodListService]
})
export class AppComponent {
  
  loadedFeature = 'lunchboxes';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
