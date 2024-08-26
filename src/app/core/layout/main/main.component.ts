import { BreakpointObserver } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import {
  Component,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {
  MatDrawer,
  MatSidenav,
  MatSidenavContainer,
  MatSidenavModule,
} from '@angular/material/sidenav';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { MenuList } from './interface/menu.interface';
import { MENU } from './menu';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatSidenavModule,
    MatSidenavContainer,
    MatSidenav,
    MatToolbar,
    MatIconModule,
    MatButtonModule,
    MatDrawer,
    MatSlideToggle,
    SidebarComponent,
    MatListModule,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export default class MainComponent implements OnInit {
  private observer = inject(BreakpointObserver);
  title = 'material-responsive-sidenav';
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  isMobile = true;
  isCollapsed = true;
  menu: MenuList = MENU;

  ngOnInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((screenSize) => {
      if (screenSize.matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }
  toggleMenu(): void {
    if (this.isMobile) {
      this.sidenav.toggle();
      this.isCollapsed = false; // On mobile, the menu can never be collapsed
    } else {
      this.sidenav.open(); // On desktop/tablet, the menu can never be fully closed
      this.isCollapsed = !this.isCollapsed;
    }
  }
}
