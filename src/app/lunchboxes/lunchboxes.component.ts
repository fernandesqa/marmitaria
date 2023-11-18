import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackedLunchListComponent } from './packed-lunch-list/packed-lunch-list.component';
import { PackedLunchDetailsComponent } from './packed-lunch-details/packed-lunch-details.component';
import { PackedLunch } from './packed-lunch-list/packed-lunch-list.model';
import { LunchboxesService } from './lunchboxes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lunchboxes',
  standalone: true,
  imports: [
    CommonModule,
    PackedLunchListComponent,
    PackedLunchDetailsComponent
  ],
  templateUrl: './lunchboxes.component.html',
  styleUrl: './lunchboxes.component.css',
  providers: [LunchboxesService]
})
export class LunchboxesComponent implements OnInit, OnDestroy {

  packedLunchSelected!: PackedLunch;
  subscription: Subscription = new Subscription();

  constructor(private lunchboxesService: LunchboxesService) {}

  ngOnInit(): void {
      this.subscription = this.lunchboxesService.packedLunchSelected.subscribe((packedLunchSelected: PackedLunch) => {
        this.packedLunchSelected = packedLunchSelected;
      })
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

}
