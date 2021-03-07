import { Component, OnInit } from '@angular/core';
import {PlayList} from '../PlayList';

@Component({
  selector: 'app-detail-playlist',
  templateUrl: './detail-playlist.component.html',
  styleUrls: ['./detail-playlist.component.css']
})
export class DetailPlaylistComponent implements OnInit {

  playlist: PlayList;
  constructor() { }

  ngOnInit(): void {
    this.playlist = new PlayList();
    this.playlist.nomPlayList = 'Test1';
    this.playlist.nomCreateur = 'nom1';
    this.playlist.nbClic = 0;
    this.playlist.caractere = 'POP';
    this.playlist.listContributeur = 'nomContributor1';
    this.playlist.listMorceau = 'Sunshine';
  }

}
