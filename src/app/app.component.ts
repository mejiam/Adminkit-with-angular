import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';import { SidebarComponent } from './components/template/sidebar/sidebar.component';
import { NavbarComponent } from "./components/template/navbar/navbar.component";
import { MainComponent } from "./components/template/main/main.component";
import { FooterComponent } from "./components/template/footer/footer.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, NavbarComponent, MainComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Prodesk';
}
