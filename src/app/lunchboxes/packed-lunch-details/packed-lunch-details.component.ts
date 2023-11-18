import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackedLunch } from '../packed-lunch-list/packed-lunch-list.model';
import { DropdownDirective } from '../../shared/dropdown.directive';
import { Food } from '../../shared/food.model';
import { LunchboxesService } from '../lunchboxes.service';

@Component({
  selector: 'app-packed-lunch-details',
  standalone: true,
  imports: [CommonModule, DropdownDirective],
  templateUrl: './packed-lunch-details.component.html',
  styleUrl: './packed-lunch-details.component.css'
})
export class PackedLunchDetailsComponent {
  @Input() selectedPackedLunch!: PackedLunch;

  constructor(private lunchBoxesService: LunchboxesService) {}

  AddToFoodList() {
    this.lunchBoxesService.addIngredientsToFoodList(this.selectedPackedLunch.ingredients);
  }


}
