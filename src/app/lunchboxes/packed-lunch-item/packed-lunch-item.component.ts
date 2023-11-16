import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackedLunch } from '../packed-lunch-list/packed-lunch-list.model';

@Component({
  selector: 'app-packed-lunch-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './packed-lunch-item.component.html',
  styleUrl: './packed-lunch-item.component.css'
})
export class PackedLunchItemComponent {

  @Output() packedLunchSelected = new EventEmitter<void>();
  @Input() packedLunch!: PackedLunch;

  onSelected() {

    this.packedLunchSelected.emit();
    
  }

}
