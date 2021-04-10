import {Component, OnInit} from '@angular/core';
import {ApiPlaylistBrokerService} from '../api-playlist-broker.service';
import {HttpClient} from '@angular/common/http';
import {User} from '../User';

@Component({
  selector: 'app-ajouter-user',
  templateUrl: './ajouter-user.component.html',
  styleUrls: ['./ajouter-user.component.css']
})
export class AjouterUserComponent implements OnInit {
  user: User;
  nomUser = '';

  constructor(private apiPlayListBrokerService: ApiPlaylistBrokerService,
              private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.user = new User();
  }

  valid(): void {
    this.apiPlayListBrokerService.ajouterUser(this.nomUser);
  }

}
