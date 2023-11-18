import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackedLunch } from '../packed-lunch-list/packed-lunch-list.model';
import { LunchboxesService } from '../lunchboxes.service';

@Component({
  selector: 'app-packed-lunch-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './packed-lunch-item.component.html',
  styleUrl: './packed-lunch-item.component.css'
})
export class PackedLunchItemComponent {

  @Input() packedLunch!: PackedLunch;

  constructor(private lunchboxesService: LunchboxesService) {}

  onSelected() {
    this.lunchboxesService.packedLunchSelected.emit(this.packedLunch);
  }

}
