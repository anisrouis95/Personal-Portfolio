import { Component } from '@angular/core';
import { SidebarService } from './sidebar.service';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-mobilesidebar',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './mobilesidebar.component.html',
  styleUrl: './mobilesidebar.component.scss',
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate(
          '300ms ease',
          style({ transform: 'translateX(0)', opacity: 1 })
        ),
      ]),
      transition(':leave', [
        animate(
          '300ms ease',
          style({ transform: 'translateX(-100%)', opacity: 0 })
        ),
      ]),
    ]),
  ],
})
export class MobilesidebarComponent {
  open = false;
  dropdownOpen = false;
  languages = [
    { code: 'en', label: 'English', icon: 'EN' },
    { code: 'fr', label: 'Français', icon: 'FR' },
    { code: 'ar', label: 'العربية', icon: 'AR' },
  ];
  currentLang = 'en';
  isDark = false;

  constructor(
    private sidebar: SidebarService,
    private translate: TranslateService
  ) {
    this.sidebar.open$.subscribe((val) => (this.open = val));
    this.currentLang =
      this.translate.currentLang || this.translate.getDefaultLang();
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDark = savedTheme === 'dark';
    } else {
      this.isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    this.applyTheme();
  }

  close() {
    this.sidebar.close();
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  switchLang(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
    this.dropdownOpen = false;
  }

  toggleDarkMode() {
    this.isDark = !this.isDark;
    this.applyTheme();
    localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
  }

  private applyTheme() {
    if (this.isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
