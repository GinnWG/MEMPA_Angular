import {Component, OnInit} from '@angular/core';
import {Morceau} from '../Morceau';
import {ApiPlaylistBrokerService} from '../api-playlist-broker.service';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-ajouter-morceau',
  templateUrl: './ajouter-morceau.component.html',
  styleUrls: ['./ajouter-morceau.component.css']
})
export class AjouterMorceauComponent implements OnInit {
  morceau: Morceau;
  titre = '';
  artiste = '';

  constructor(private apiPlaylistBrokerService: ApiPlaylistBrokerService,
              private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.morceau = new Morceau();
  }

  valid(): void {
    this.apiPlaylistBrokerService.ajouterMorceau(this.morceau);
  }

}
