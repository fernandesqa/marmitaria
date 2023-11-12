import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackedLunch } from './packed-lunch-list.model';

@Component({
  selector: 'app-packed-lunch-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './packed-lunch-list.component.html',
  styleUrl: './packed-lunch-list.component.css'
})
export class PackedLunchListComponent {

  lunchboxes: PackedLunch[] = [
    new PackedLunch('Churrasco', 'Churrasco de Picanha', 'https://blog.biglar.com.br/wp-content/uploads/2021/05/shutterstock_148296899.jpg'),
    new PackedLunch('Churrasco', 'Churrasco de Picanha', 'https://blog.biglar.com.br/wp-content/uploads/2021/05/shutterstock_148296899.jpg')
  ];

}
