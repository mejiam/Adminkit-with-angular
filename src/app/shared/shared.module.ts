import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../components/template/sidebar/sidebar.component';
import { NavbarComponent } from '../components/template/navbar/navbar.component';
import { FooterComponent } from '../components/template/footer/footer.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, SidebarComponent, NavbarComponent, FooterComponent],
  exports: [SidebarComponent, NavbarComponent, FooterComponent],
})
export class SharedModule {}
