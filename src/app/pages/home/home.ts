import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { Conference } from '../../models/conference';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, DatePipe, UpperCasePipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  list: Conference[] = [];
  searchTitle: string = '';
  title: string = 'Liste des conférences';

  ngOnInit(): void {
    this.list = [
      {
        title: 'Conference Angular',
        description: 'Web dev conference and workshop',
        date: new Date('2026-11-20'),
        nbrMax: 20,
        nbrReservation: 5,
        picture: 'https://media.istockphoto.com/id/499517325/photo/a-man-speaking-at-a-business-conference.jpg?s=612x612&w=0&k=20&c=gWTTDs_Hl6AEGOunoQ2LsjrcTJkknf9G8BGqsywyEtE='
      },
      {
        title: 'Conference AI',
        description: 'Introduction to machine learning and its uses',
        date: new Date('2026-11-25'),
        nbrMax: 15,
        nbrReservation: 15,
        picture: 'https://picsum.photos/seed/datascience/600/400'
      },
      {
        title: 'Conference Cloud',
        description: 'Cloud services, deployment and DevOps',
        date: new Date('2026-11-30'),
        nbrMax: 10,
        nbrReservation: 4,
        picture: 'https://picsum.photos/seed/cloud/600/400'
      }
    ];
  }

  participate(conf: Conference): void {
     {
      conf.nbrReservation++;
    }
  }
}