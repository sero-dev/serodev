import { Component } from '@angular/core';
import { PageDirective } from '../page.directive';

@Component({
  selector: 'web-content',
  standalone: true,
  imports: [PageDirective],
  template: `
    <div webPage class="flex flex-col bg-stone-300 shadow-md p-4 overflow-auto">
      <div class="grow bg-white rounded-md  p-4">
        <div
          class="grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  gap-4">
          <div class="h-96 rounded-md border-stone-200 border-2"></div>
          <div class="h-96 rounded-md border-stone-200 border-2"></div>
          <div class="h-96 rounded-md border-stone-200 border-2"></div>
          <div class="h-96 rounded-md border-stone-200 border-2"></div>
          <div class="h-96 rounded-md border-stone-200 border-2"></div>
          <div class="h-96 rounded-md border-stone-200 border-2"></div>
          <div class="h-96 rounded-md border-stone-200 border-2"></div>
          <div class="h-96 rounded-md border-stone-200 border-2"></div>
        </div>
      </div>
    </div>
  `,
})
export class ContentComponent {}
