import {Component, OnInit} from '@angular/core';
import {User} from '../User';
import {ApiPlaylistBrokerService} from '../api-playlist-broker.service';

@Component({
  selector: 'app-lister-user',
  templateUrl: './lister-user.component.html',
  styleUrls: ['./lister-user.component.css']
})
export class ListerUserComponent implements OnInit {
  user: User[] = [];

  constructor(private apiPlayListBrokerService: ApiPlaylistBrokerService) {
  }

  ngOnInit(): void {
    this.apiPlayListBrokerService.recupererlistUser().subscribe((data) => {
      this.user = data;
    });
  }

}
