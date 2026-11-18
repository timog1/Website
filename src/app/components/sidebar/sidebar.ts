import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export interface NavItem {
  path: string;
  label: string;
  exact?: boolean;
}

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class SidebarComponent {
  navigation = input<NavItem[]>([
    { path: '/', label: 'Getting Started', exact: true },
    { path: '/hydration', label: 'Hydration & SSR' },
    { path: '/components', label: 'Components' },
    { path: '/directives', label: 'Directives' },
    { path: '/services', label: 'Services & DI' },
    { path: '/forms', label: 'Forms' },
  ]);
}
