import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  imports: [],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {
  notifications: string[] = [
    'Nouvelle conférence : Angular 21',
    'Il reste 6 places pour Signals Workshop',
  ];
  show: boolean = false;

  toggle(): void {
    this.show = !this.show;
  }
}