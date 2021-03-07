import { Component, OnInit } from '@angular/core';
import {PlayList} from '../PlayList';

@Component({
  selector: 'app-lister-playlist',
  templateUrl: './lister-playlist.component.html',
  styleUrls: ['./lister-playlist.component.css']
})
export class ListerPlaylistComponent implements OnInit {

  playlist: PlayList[] = [];
  constructor() { }

  ngOnInit(): void {
      const pl1 = new PlayList();
      pl1.caractere = 'POP';
      pl1.listMorceau = 'Sunshine';
      pl1.listContributeur = 'kim';
      pl1.nbClic = 0;
      pl1.nomPlayList = 'testplaylist1';
      pl1.nomCreateur = 'Kim';
      this.playlist.push(pl1);
      const pl2 = new PlayList();
      pl2.caractere = 'ROCK';
      pl2.listMorceau = 'Moonlight';
      pl2.listContributeur = 'toto';
      pl2.nbClic = 0;
      pl2.nomPlayList = 'testplaylist2';
      pl2.nomCreateur = 'Meg';
      this.playlist.push(pl2);
    }

}
