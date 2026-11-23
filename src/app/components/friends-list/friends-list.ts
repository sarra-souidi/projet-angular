import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-friends-list',
  imports: [FormsModule],
  templateUrl: './friends-list.html',
  styleUrl: './friends-list.css',
})
export class FriendsList {
  friends: string[] = ['Sami', 'Ahmed', 'Amine'];
  newFriend: string = '';

  addFriend(): void {
    if (this.newFriend != '') {
      this.friends.push(this.newFriend);
      this.newFriend = '';
    }
  }
}