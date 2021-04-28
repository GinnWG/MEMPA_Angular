import {Component, OnInit} from '@angular/core';
import {PlayList} from '../PlayList';
import {ApiPlaylistBrokerService} from '../api-playlist-broker.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-ajouter-playlist',
  templateUrl: './ajouter-playlist.component.html',
  styleUrls: ['./ajouter-playlist.component.css']
})
export class AjouterPlaylistComponent implements OnInit {
  playlist: PlayList;
  nomPlayList = '';
  caractere = '';
  nomCreateur = '';

  constructor(private apiPlayListBrokerService: ApiPlaylistBrokerService,
              private router: Router,
              private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.playlist = new PlayList();
  }

  valid(): void {

    let err = document.getElementById('error');
    let nomPlaylist = this.playlist.nomPlayList;
    let nomCreateur = this.playlist.nomCreateur;
    let caractere = this.playlist.caractere;

    if (nomPlaylist == null || nomCreateur == null || caractere == null) {
      err.className += " error";
      err.style.display="block";
    }
    else {
      err.style.display="none";
      this.apiPlayListBrokerService.ajouterPlayList(this.playlist);
      this.router.navigate(['/lister']);
    }
  }
}
