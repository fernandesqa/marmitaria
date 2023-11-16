import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackedLunchItemComponent } from '../packed-lunch-item/packed-lunch-item.component';
import { PackedLunch } from './packed-lunch-list.model';

@Component({
  selector: 'app-packed-lunch-list',
  standalone: true,
  imports: [CommonModule, PackedLunchItemComponent],
  templateUrl: './packed-lunch-list.component.html',
  styleUrl: './packed-lunch-list.component.css'
})
export class PackedLunchListComponent {

  @Output() packedLunchWasSelected = new EventEmitter<PackedLunch>();

  lunchboxes: PackedLunch[] = [
    new PackedLunch('Churrasco', 'Churrasco de Picanha', 'https://blog.biglar.com.br/wp-content/uploads/2021/05/shutterstock_148296899.jpg'),
    new PackedLunch('Salmão Grelhado', 'Uma delícia', 'https://www.dicasdemulher.com.br/wp-content/uploads/2020/01/salmao-grelhado-0.png')
  ];

  onPackedLunchSelected(packedLunch: PackedLunch) {

    this.packedLunchWasSelected.emit(packedLunch);

  }

}

