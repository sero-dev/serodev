import { Component, input } from '@angular/core';
import { PillColor } from './pill-type';

@Component({
  selector: 'web-pill',
  standalone: true,
  imports: [],
  template: `
    <span
      class="rounded-full px-2 leading-4 text-xs font-bold"
      [class.bg-black]="color() === 'black'"
      [class.text-stone-100]="color() === 'black'"
      [class.bg-yellow-400]="color() === 'yellow'"
      [class.text-black]="color() === 'yellow'"
      [class.bg-red-500]="color() === 'red'"
      [class.text-white]="color() === 'red'"
      [class.bg-blue-200]="color() === 'blue'"
      [class.text-blue-500]="color() === 'blue'">
      <ng-content></ng-content>
    </span>
  `,
})
export class PillComponent {
  public color = input<PillColor>('black');
}
