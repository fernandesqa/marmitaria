import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackedLunchListComponent } from './packed-lunch-list/packed-lunch-list.component';
import { PackedLunchDetailsComponent } from './packed-lunch-details/packed-lunch-details.component';
import { PackedLunch } from './packed-lunch-list/packed-lunch-list.model';

@Component({
  selector: 'app-lunchboxes',
  standalone: true,
  imports: [
    CommonModule,
    PackedLunchListComponent,
    PackedLunchDetailsComponent
  ],
  templateUrl: './lunchboxes.component.html',
  styleUrl: './lunchboxes.component.css'
})
export class LunchboxesComponent {

  packedLunchSelected!: PackedLunch;

}
