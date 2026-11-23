import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  imports: [],
  templateUrl: './nav-menu.html',
  styleUrl: './nav-menu.css',
})
export class NavMenu {
  links: string[] = ['Accueil', 'Profil', 'Conférences', 'Amis', 'Notifications','Admin'];
  activeLink: string = 'Accueil';

  select(link: string): void {
    this.activeLink = link;
  }
}