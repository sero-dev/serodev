import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationBarComponent } from "./navigation-bar/navigation-bar.component";

@Component({
    standalone: true,
    selector: 'serodev-root',
    template: `
    <div class="flex">
      <serodev-navigation-bar />
      <div class="grow flex flex-col bg-stone-200">
        <div class="flex justify-end bg-blue-700 min-h-10">
        </div>
        <router-outlet></router-outlet>
      </div>
    </div>

  `,
    styles: ``,
    imports: [RouterModule, NavigationBarComponent]
})
export class AppComponent {
}
