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

  playlist: PlayList;

  constructor(private apiPlayListBrokerService: ApiPlaylistBrokerService,
              private httpClient: HttpClient,
              private router: Router,
              private routeactive: ActivatedRoute) { }

  ngOnInit(): void {
    const idPlayList = this.routeactive.snapshot.params.idPlayList;
   // const nomPlayList = this.routeactive.snapshot.params.nomPlayList;
   // const caractere = this.routeactive.snapshot.params.caractere;

    this.apiPlayListBrokerService.getPlayList(idPlayList).subscribe((data) => { this.playlist = data; });

  //  this.apiPlayListBrokerService.search(nomPlayList, caractere).subscribe((data) => { this.playlist[] = data; });


  }

}
