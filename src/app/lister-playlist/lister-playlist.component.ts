import {Component, OnInit} from '@angular/core';
import {PlayList} from '../PlayList';
import {ApiPlaylistBrokerService} from '../api-playlist-broker.service';

@Component({
  selector: 'app-lister-playlist',
  templateUrl: './lister-playlist.component.html',
  styleUrls: ['./lister-playlist.component.css']
})
export class ListerPlaylistComponent implements OnInit {
  playlist: PlayList[] = [];

  constructor(private apiPlayListBrokerService: ApiPlaylistBrokerService) {
  }

  ngOnInit(): void {
    this.apiPlayListBrokerService.recupererlist().subscribe((data) => {
      this.playlist = data;
    });
  }

  sortnbClic(): void{

  }

}
