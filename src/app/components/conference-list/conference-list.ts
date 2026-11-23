import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe, UpperCasePipe, NgClass } from '@angular/common';
import { Conference } from '../../models/conference';

@Component({
  selector: 'app-conference-list',
  imports: [FormsModule, DatePipe, UpperCasePipe, NgClass],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
})
export class ConferenceList implements OnInit {
  title: string = 'Liste des conférences à venir';
  searchTitle: string = '';
  list: Conference[] = [];

  ngOnInit(): void {
    this.list = [
      {
        id: 1,
        title: 'Angular 21 Conference',
        description: 'Nouveautés d Angular 21',
        date: new Date('2027-11-15'),
        place: 'Tunis',
        maxParticipants: 50,
        nbParticipants: 25,
      },
      {
        id: 2,
        title: 'Signals Workshop',
        description: 'Atelier pratique sur les signals',
        date: new Date('2027-11-30'),
        place: 'Ariana',
        maxParticipants: 20,
        nbParticipants: 14,
      },
      {
        id: 3,
        title: 'Web Conference',
        description: 'Développement web moderne',
        date: new Date('2027-11-20'),
        place: 'Sousse',
        maxParticipants: 30,
        nbParticipants: 30,
      },
      {
        id: 4,
        title: 'Data Science Day',
        description: 'IA et Machine Learning',
        date: new Date('2027-12-05'),
        place: 'Monastir',
        maxParticipants: 40,
        nbParticipants: 12,
      },
    ];
  }

  participate(conf: Conference): void {
    if (conf.nbParticipants < conf.maxParticipants) {
      conf.nbParticipants++;
    }
  }
}