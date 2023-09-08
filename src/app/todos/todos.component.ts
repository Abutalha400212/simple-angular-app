import { Component } from '@angular/core';
import { fade, slideInOut } from 'src/animation/animation';
@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [slideInOut],
})
export class TodosComponent {
  items: any[] = ['Wash the dishes', 'Call the accountant'];
  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = '';
  }
  removeItem(item: any) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
}
