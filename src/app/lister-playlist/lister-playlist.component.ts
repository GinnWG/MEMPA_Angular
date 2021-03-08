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
      pl1.idPlayList = 1;
      pl1.caractere = 'POP';
     // pl1.listMorceau = [(1,"music1")];
    //  pl1.listContributeur = {1,'user1'};
      pl1.nbClic = 0;
      pl1.nomPlayList = 'playlist1';
      pl1.nomCreateur = 'user1';
      this.playlist.push(pl1);
      const pl2 = new PlayList();
      pl2.idPlayList = 2;
      pl2.caractere = 'ROCK';
   //   pl2.listMorceau = {2,'music2'};
    //  pl2.listContributeur = {2,'user2'};
      pl2.nbClic = 0;
      pl2.nomPlayList = 'playlist2';
      pl2.nomCreateur = 'user2';
      this.playlist.push(pl2);
    }

}
