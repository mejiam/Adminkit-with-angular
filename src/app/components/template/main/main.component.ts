import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  pageTitle1="Tablero";
  pageTile2 = "Análisis";
  misiones = 208;
  costos=4321.18;
  visitas=14310;
  ordenes=326;

}
