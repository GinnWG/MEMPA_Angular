import { Component, OnInit } from '@angular/core';
import {PlayList} from "../PlayList";
import {ApiPlaylistBrokerService} from "../api-playlist-broker.service";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-supprimer-playlist',
  templateUrl: './supprimer-playlist.component.html',
  styleUrls: ['./supprimer-playlist.component.css']
})
export class SupprimerPlaylistComponent implements OnInit {

  playlist: PlayList;

  constructor(
    private apiPlayListBrokerService: ApiPlaylistBrokerService,
    private httpClient: HttpClient,
    private router: Router,
    private routeactive: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const idPlaylist = this.routeactive.snapshot.params.idPlaylist;
    this.apiPlayListBrokerService.deletePlaylist(idPlaylist);
  }

}
