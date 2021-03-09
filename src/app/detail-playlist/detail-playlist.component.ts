import { Component, OnInit } from '@angular/core';
import {PlayList} from '../PlayList';
import {ApiPlaylistBrokerService} from '../api-playlist-broker.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-detail-playlist',
  templateUrl: './detail-playlist.component.html',
  styleUrls: ['./detail-playlist.component.css']
})
export class DetailPlaylistComponent implements OnInit {

  playlist: PlayList[] = [];

  constructor(private apiPlayListBrokerService: ApiPlaylistBrokerService,
              private httpClient: HttpClient,
              private router: Router,
              private routeactive: ActivatedRoute) { }

  ngOnInit(): void {
    const idPlayList = this.routeactive.snapshot.params.idPlayList;
    this.apiPlayListBrokerService.getPlayList(idPlayList).subscribe((playlist) => { this.playlist = playlist; });
    /*
    this.playlist[0] = new PlayList();
    this.playlist[0].idPlayList = 2;
    this.playlist[0].nomPlayList = 'Test2';
    this.playlist[0].nomCreateur = 'nom2';
    this.playlist[0].nbClic = 0;
    this.playlist[0].caractere = 'ROCK';
    this.playlist[0].listContributeur = {'nomContributor2'};
    this.playlist[0].listMorceau = {'Moonlight'};
  */
  }

}
