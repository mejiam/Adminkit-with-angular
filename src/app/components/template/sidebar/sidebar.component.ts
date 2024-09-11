import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

interface MenuItem {
  label: string;
  icon: string;
  link: string;
  active?: boolean;
}

interface MenuSection {
  header: string;
  items: MenuItem[];
}
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  menuSections: MenuSection[] = [
    {
      header: 'Pages',
      items: [
        {
          label: 'Dashboard',
          icon: 'fa-tachometer-alt',
          link: 'index.html',
          active: true,
        },
        { label: 'Profile', icon: 'fa-user', link: 'pages-profile.html' },
        {
          label: 'Sign In',
          icon: 'fa-sign-in-alt',
          link: 'pages-sign-in.html',
        },
        { label: 'Sign Up', icon: 'fa-user-plus', link: 'pages-sign-up.html' },
        { label: 'Blank', icon: 'fa-file', link: 'pages-blank.html' },
      ],
    },
    {
      header: 'Tools & Components',
      items: [
        { label: 'Buttons', icon: 'fa-square', link: 'ui-buttons.html' },
        { label: 'Forms', icon: 'fa-check-square', link: 'ui-forms.html' },
        { label: 'Cards', icon: 'fa-th', link: 'ui-cards.html' },
        { label: 'Typography', icon: 'fa-font', link: 'ui-typography.html' },
        { label: 'Icons', icon: 'fa-coffee', link: 'icons-feather.html' },
      ],
    },
    {
      header: 'Plugins & Addons',
      items: [
        { label: 'Charts', icon: 'fa-chart-bar', link: 'charts-chartjs.html' },
        { label: 'Maps', icon: 'fa-map', link: 'maps-google.html' },
      ],
    },
  ];

  appName = environment.appName;

  ngOnInit() {
    // Inicialización si es necesaria
  }
}
