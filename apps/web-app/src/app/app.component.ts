import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { PillComponent } from './ui/pill-component';

@Component({
  standalone: true,
  selector: 'web-root',
  template: `
    <div class="flex">
      <web-navigation-bar />
      <div class="grow flex flex-col bg-white">
        <div class="flex justify-end bg-blue-700 min-h-10"></div>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: ``,
  imports: [RouterModule, NavigationBarComponent, PillComponent],
})
export class AppComponent {}
