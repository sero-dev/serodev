import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { PillComponent } from './ui/pill-component';
import { BoxIconComponent } from './util/boxicon.component';

@Component({
  standalone: true,
  selector: 'web-root',
  template: `
    <div class="flex">
      <web-navigation-bar />
      <div class="grow flex flex-col bg-white">
        <div class="flex px-4 justify-end items-center bg-blue-700 h-nav">
          <span class="text-blue-100 rounded-md font-semibold px-2 py-0.5">
            <web-boxicon class="mr-2" icon="bx-user"></web-boxicon>
            Hi, Sean
          </span>
        </div>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: ``,
  imports: [
    RouterModule,
    NavigationBarComponent,
    PillComponent,
    BoxIconComponent,
  ],
})
export class AppComponent {}
