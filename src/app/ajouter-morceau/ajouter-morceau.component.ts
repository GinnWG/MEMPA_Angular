import {Component, OnInit} from '@angular/core';
import {Morceau} from '../Morceau';
import {ApiPlaylistBrokerService} from '../api-playlist-broker.service';
import {HttpClient} from '@angular/common/http';
import {Router} from "@angular/router";



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
              private router: Router,
              private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.morceau = new Morceau();
  }

  valid(): void {
    let err = document.getElementById('error');
    let nomMusic = this.morceau.titre;
    let nomArtiste = this.morceau.artiste;

    if (nomMusic == null || nomArtiste == null) {
      err.className += " error";
      err.style.display="block";
    } else {
      err.style.display="none";
      this.apiPlaylistBrokerService.ajouterMorceau(this.morceau);
      this.router.navigate(['/listermorceau']);
    }
  }

}
