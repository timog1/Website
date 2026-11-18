import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="bg-gradient-to-r from-red-600 via-pink-600 to-purple-700 text-white shadow-lg sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <a routerLink="/" class="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <svg class="w-8 h-8" viewBox="0 0 982 239" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="white" d="M388.676 191.62L278.94 73.56h96.83l60.6 72.88 60.6-72.88h96.83L584.07 191.62H487.24L436.28 126.38 385.32 191.62H388.676zM143.4 191.62L0 73.56h96.83l43.4 52.12L183.63 73.56h96.83L186.98 191.62H143.4zm735.28 0L770 73.56h96.83l43.4 52.12L953.63 73.56h96.83L956.98 191.62H913.42zM278.94 0L388.676 118.06 498.41 0H617.35L448.68 191.62 278.94 0z"/>
            </svg>
            <span class="text-xl font-bold">Angular Learning</span>
          </a>
          <nav class="hidden md:flex items-center gap-1">
            <a routerLink="/" routerLinkActive="bg-white/20" [routerLinkActiveOptions]="{exact: true}"
               class="px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-sm font-medium">Home</a>
            <a routerLink="/hydration" routerLinkActive="bg-white/20"
               class="px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-sm font-medium">Hydration & SSR</a>
            <a routerLink="/components" routerLinkActive="bg-white/20"
               class="px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-sm font-medium">Components</a>
            <a routerLink="/directives" routerLinkActive="bg-white/20"
               class="px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-sm font-medium">Directives</a>
            <a routerLink="/services" routerLinkActive="bg-white/20"
               class="px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-sm font-medium">Services</a>
            <a routerLink="/forms" routerLinkActive="bg-white/20"
               class="px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-sm font-medium">Forms</a>
          </nav>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent {}
