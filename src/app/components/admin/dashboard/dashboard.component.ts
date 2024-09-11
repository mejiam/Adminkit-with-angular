import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  pageTitle1 = 'Tablero';
  pageTile2 = 'Análisis';
  misiones = 208;
  costos = 4321.18;
  visitas = 14310;
  ordenes = 326;
}
