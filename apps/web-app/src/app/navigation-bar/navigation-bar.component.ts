import { Component } from '@angular/core';
import { NavItemComponent } from './ui/nav-item/nav-item.component';
import { NavSectionComponent } from './ui/nav-section/nav-section.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BoxIconComponent } from '../util/boxicon.component';

@Component({
  selector: 'web-navigation-bar',
  standalone: true,
  template: `
    <div
      class="max-h-screen min-h-screen w-64 flex flex-col gap-10 bg-white shadow-md py-4 px-2 overflow-y-auto">
      <a class="mb-10 px-2" routerLink="/">
        <h1 class="text-xl font-bold mb-2">Dashboard</h1>
        <p class="text-sm text-stone-500">
          Imagination… What we can easily see is only a small percentage of what
          is possible.
        </p>
      </a>
      <web-nav-section title="Account">
        <web-nav-item
          [routerLink]="['overview']"
          routerLinkActive="font-bold"
          icon="bx-grid"
          >Overview</web-nav-item
        >
        <web-nav-item
          [routerLink]="['updates']"
          routerLinkActive="font-bold"
          icon="bx-notification"
          pillText="4"
          pillColor="yellow">
          Updates
        </web-nav-item>
        <web-nav-item
          [routerLink]="['payment']"
          routerLinkActive="font-bold"
          icon="bx-credit-card"
          >Payment</web-nav-item
        >
        <web-nav-item
          [routerLink]="['order/list']"
          routerLinkActive="font-bold"
          icon="bx-cart"
          >My Orders</web-nav-item
        >
        <web-nav-item
          [routerLink]="['admin/settings']"
          routerLinkActive="font-bold"
          icon="bxs-store"
          >Admin Settings</web-nav-item
        >
      </web-nav-section>
      <web-nav-section class="grow" title="Product">
        <web-nav-item
          [routerLink]="['product/new']"
          routerLinkActive="font-bold"
          icon="bx-plus-circle"
          >Add New</web-nav-item
        >
        <web-nav-item
          [routerLink]="['product/list']"
          routerLinkActive="font-bold"
          icon="bxs-box"
          pillText="8"
          >My Products</web-nav-item
        >
        <web-nav-item
          [routerLink]="['stocks']"
          routerLinkActive="font-bold"
          icon="bx-line-chart"
          >Stocks</web-nav-item
        >
      </web-nav-section>

      <web-nav-section title="Admin">
        <web-nav-item
          [routerLink]="['user/setup']"
          routerLinkActive="font-bold"
          icon="bx-cog"
          >Account Setup</web-nav-item
        >
        <web-nav-item
          [routerLink]="['user/manage']"
          routerLinkActive="font-bold"
          icon="bx-user-circle"
          >Manage User</web-nav-item
        >
        <web-nav-item
          [routerLink]="['logout']"
          routerLinkActive="font-bold"
          icon="bx-log-out"
          >Logout</web-nav-item
        >
      </web-nav-section>
    </div>
  `,
  imports: [
    NavItemComponent,
    NavSectionComponent,
    RouterLink,
    RouterLinkActive,
    BoxIconComponent,
  ],
})
export class NavigationBarComponent {}
