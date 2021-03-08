import { Component, OnInit } from '@angular/core';
import {PlayList} from '../PlayList';

@Component({
  selector: 'app-detail-playlist',
  templateUrl: './detail-playlist.component.html',
  styleUrls: ['./detail-playlist.component.css']
})
export class DetailPlaylistComponent implements OnInit {

  playlist: PlayList[] = [];

  constructor() { }

  ngOnInit(): void {
    this.playlist[1] = new PlayList();
    this.playlist[1].nomPlayList = 'Test1';
    this.playlist[1].nomCreateur = 'nom1';
    this.playlist[1].nbClic = 0;
    this.playlist[1].caractere = 'POP';
    this.playlist[1].listContributeur = 'nomContributor1';
    this.playlist[1].listMorceau = 'Sunshine';
    this.playlist[0] = new PlayList();
    this.playlist[0].nomPlayList = 'Test2';
    this.playlist[0].nomCreateur = 'nom2';
    this.playlist[0].nbClic = 0;
    this.playlist[0].caractere = 'ROCK';
    this.playlist[0].listContributeur = 'nomContributor2';
    this.playlist[0].listMorceau = 'Moonlight';
  }

}
