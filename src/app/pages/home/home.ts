import { Component } from '@angular/core';
import { Profile } from '../../components/profile/profile';
import { FriendsList } from '../../components/friends-list/friends-list';
import { Notifications } from '../../components/notifications/notifications';
import { ConferenceList } from '../../components/conference-list/conference-list';

@Component({
  selector: 'app-home',
  imports: [Profile, FriendsList, Notifications, ConferenceList],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}