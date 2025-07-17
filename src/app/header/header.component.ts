import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  languages = [
    { code: 'en', label: 'English', icon: 'EN' },
    { code: 'fr', label: 'Français', icon: 'FR' },
    { code: 'ar', label: 'العربية', icon: 'AR' },
  ];
  currentLang = 'en';
  dropdownOpen = false;
  isDark = false;

  constructor(private translate: TranslateService) {
    translate.addLangs(this.languages.map((l) => l.code));
    translate.setDefaultLang('en');
    this.currentLang = translate.getDefaultLang();
    // Initialize theme from localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDark = savedTheme === 'dark';
    } else {
      this.isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    this.applyTheme();
  }

  switchLang(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
    this.dropdownOpen = false;
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  toggleDarkMode() {
    this.isDark = !this.isDark;
    console.log('[toggleDarkMode] isDark:', this.isDark);
    this.applyTheme();
    localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
  }

  private applyTheme() {
    if (this.isDark) {
      document.documentElement.classList.add('dark');
      console.log('[applyTheme] Added dark class to <html>');
    } else {
      document.documentElement.classList.remove('dark');
      console.log('[applyTheme] Removed dark class from <html>');
    }
  }

  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
