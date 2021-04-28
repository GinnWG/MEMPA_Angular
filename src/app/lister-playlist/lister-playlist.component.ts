import {Component, OnInit} from '@angular/core';
import {PlayList} from '../PlayList';
import {ApiPlaylistBrokerService} from '../api-playlist-broker.service';

@Component({
  selector: 'app-lister-playlist',
  templateUrl: './lister-playlist.component.html',
  styleUrls: ['./lister-playlist.component.css']
})
export class ListerPlaylistComponent implements OnInit {
  playlist: PlayList[] = [];

  constructor(private apiPlayListBrokerService: ApiPlaylistBrokerService) {
  }

  ngOnInit(): void {
    this.apiPlayListBrokerService.recupererlist().subscribe((data) => {
      this.playlist = data;
    });
  }

  listerParCreateur(nomUser: string): void
{
    this.apiPlayListBrokerService.getPlayListParCreateur(nomUser).subscribe((data) => {
      this.playlist = data;
    });
}

  listerParStyle(caractere: string): void
  {
    this.apiPlayListBrokerService.getPlayListParStyle(caractere).subscribe((data) => {
      this.playlist = data;
    });
  }

  sortNbClic(): void {
    var list: PlayList[];
    list = this.playlist;
    list.sort((a, b) => (a.nbClic < b.nbClic) ? 1 : -1);
  }

  sortNbClicInverse(): void {
    var list: PlayList[];
    list = this.playlist;
    list.sort((a, b) => (a.nbClic > b.nbClic) ? 1 : -1);
  }

  sortNom(): void {
    var list: PlayList[];
    list = this.playlist;
    list.sort((a, b) => (a.nomPlayList.toUpperCase() > b.nomPlayList.toUpperCase()) ? 1 : -1);
  }

  sortNomInverse(): void {
    var list: PlayList[];
    list = this.playlist;
    list.sort((a, b) => (a.nomPlayList.toUpperCase() < b.nomPlayList.toUpperCase()) ? 1 : -1);
  }

  sortStyle(): void {
    var list: PlayList[];
    list = this.playlist;
    list.sort((a, b) => (a.caractere.toUpperCase() > b.caractere.toUpperCase()) ? 1 : -1);
  }

  sortStyleInverse(): void {
    var list: PlayList[];
    list = this.playlist;
    list.sort((a, b) => (a.caractere.toUpperCase() < b.caractere.toUpperCase()) ? 1 : -1);
  }

  delete(id: number): void {
    this.apiPlayListBrokerService.supprimerPlayList(id);
    document.location.reload();
  }


}
