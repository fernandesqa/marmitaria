import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackedLunchItemComponent } from '../packed-lunch-item/packed-lunch-item.component';
import { PackedLunch } from './packed-lunch-list.model';
import { LunchboxesService } from '../lunchboxes.service';

@Component({
  selector: 'app-packed-lunch-list',
  standalone: true,
  imports: [CommonModule, PackedLunchItemComponent],
  templateUrl: './packed-lunch-list.component.html',
  styleUrl: './packed-lunch-list.component.css'
})
export class PackedLunchListComponent implements OnInit {

  lunchboxes!: PackedLunch[];

  constructor(private lunchboxesService: LunchboxesService) {}

  ngOnInit(): void {
      this.lunchboxes = this.lunchboxesService.getLunchboxes();
  }

}

