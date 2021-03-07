import { Component, OnInit } from '@angular/core';
import {PlayList} from '../PlayList';


@Component({
  selector: 'app-ajouter-playlist',
  templateUrl: './ajouter-playlist.component.html',
  styleUrls: ['./ajouter-playlist.component.css']
})
export class AjouterPlaylistComponent implements OnInit {


  playlist: PlayList;
  constructor() { }

  ngOnInit(): void {
    this.playlist = new PlayList();

  }

}
