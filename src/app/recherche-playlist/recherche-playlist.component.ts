import { Component, OnInit } from '@angular/core';
import {PlayList} from '../PlayList';

@Component({
  selector: 'app-recherche-playlist',
  templateUrl: './recherche-playlist.component.html',
  styleUrls: ['./recherche-playlist.component.css']
})
export class RecherchePlaylistComponent implements OnInit {

  nomPlayList: string;
  constructor() { }

  ngOnInit(): void {
  }

}
