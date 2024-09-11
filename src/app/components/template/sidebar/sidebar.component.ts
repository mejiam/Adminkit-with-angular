import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { menuOptions } from '../../../../environments/menuOptions';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent implements OnInit {
  menuSections = menuOptions;

  appName = environment.appName;

  ngOnInit() {
    // Inicialización si es necesaria
  }
}
