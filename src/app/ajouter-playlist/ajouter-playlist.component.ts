import { Component, OnInit } from '@angular/core';
import {PlayList} from '../PlayList';
import {ApiPlaylistBrokerService} from '../api-playlist-broker.service';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-ajouter-playlist',
  templateUrl: './ajouter-playlist.component.html',
  styleUrls: ['./ajouter-playlist.component.css']
})
export class AjouterPlaylistComponent implements OnInit {


  playlist: PlayList;
  constructor(private apiPlayListBrokerService: ApiPlaylistBrokerService,
              private httpClient: HttpClient ) { }

  ngOnInit(): void {
    this.playlist = new PlayList();

  }

  valid(): void{
    this.apiPlayListBrokerService.ajouterPlayList(this.playlist);
  }

}
