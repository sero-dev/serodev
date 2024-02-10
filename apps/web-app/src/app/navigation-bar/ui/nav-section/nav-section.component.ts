import { Component, input } from '@angular/core';

@Component({
  selector: 'web-nav-section',
  standalone: true,
  template: `
    <section class="pb-2 flex flex-col">
      <h4 class="uppercase text-xs text-gray-500 px-2 mb-4">{{ title() }}</h4>
      <ng-content></ng-content>
    </section>
  `,
})
export class NavSectionComponent {
  public title = input.required<string>();
}
