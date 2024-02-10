import { Component, computed, input } from '@angular/core';
import { BoxIcon, BoxIconSize } from './boxicon.type';

@Component({
  selector: 'web-boxicon',
  standalone: true,
  template: ` <i [class]="classList()"></i> `,
})
export class BoxIconComponent {
  public icon = input.required<BoxIcon>();
  public size = input<BoxIconSize>('xs');

  public classList = computed(() => {
    const list = ['bx', this.icon()];
    const size = this.size();

    if (size) {
      list.push('bx-' + size);
    }

    return list;
  });
}
