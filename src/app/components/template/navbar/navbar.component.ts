import { Component, NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from '../../admin/profile/profile.component';
import { menuOptions } from '../../../../environments/menuOptions';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SharedModule, RouterModule, ProfileComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {}
