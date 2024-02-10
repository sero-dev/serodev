import { Component, input } from '@angular/core';
import { BoxIcon } from '../../../util/boxicon.type';
import { BoxIconComponent } from '../../../util/boxicon.component';
import { PillColor } from '../../../ui/pill-type';
import { PillComponent } from '../../../ui/pill-component';

@Component({
  selector: 'web-nav-item',
  standalone: true,
  template: `
    <div
      class="text-sm text-stone-800 flex justify-between hover:cursor-pointer px-2 rounded-xl py-2 transition-all duration-100 ease-in-out select-none hover:bg-blue-100 active:bg-blue-200">
      <div class="flex items-center gap-4">
        @if(icon(); as icon) {
        <web-boxicon [icon]="icon"></web-boxicon>
        }
        <ng-content></ng-content>
      </div>
      @if(pillText(); as pillText) {
      <web-pill [color]="pillColor()">{{ pillText }}</web-pill>
      }
    </div>
  `,
  imports: [BoxIconComponent, PillComponent],
})
export class NavItemComponent {
  public icon = input<BoxIcon>();
  public pillText = input<string | number>();
  public pillColor = input<PillColor>('black');
}
