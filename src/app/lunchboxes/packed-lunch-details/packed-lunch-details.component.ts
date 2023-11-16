import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackedLunch } from '../packed-lunch-list/packed-lunch-list.model';

@Component({
  selector: 'app-packed-lunch-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './packed-lunch-details.component.html',
  styleUrl: './packed-lunch-details.component.css'
})
export class PackedLunchDetailsComponent {
  @Input() selectedPackedLunch!: PackedLunch;
}
