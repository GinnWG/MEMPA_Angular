import {Component, OnInit} from '@angular/core';
import {ApiPlaylistBrokerService} from '../api-playlist-broker.service';
import {Morceau} from '../Morceau';
import {User} from '../User';
import {PlayList} from '../PlayList';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-editer-playlist',
  templateUrl: './editer-playlist.component.html',
  styleUrls: ['./editer-playlist.component.css']
})
export class EditerPlaylistComponent implements OnInit {
  morceauList: Morceau[] = [];
  userList: User[] = [];
  user: User;
  playlist: PlayList;

  constructor(private apiPlayListBrokerService: ApiPlaylistBrokerService,
              private httpClient: HttpClient,
              private router: Router,
              private routeactive: ActivatedRoute) {
  }

  ngOnInit(): void {
    const idPlayList = this.routeactive.snapshot.params.idPlayList;
    this.apiPlayListBrokerService.getPlayList(idPlayList).subscribe((data) => {
      this.playlist = data;
    });

    this.apiPlayListBrokerService.recupererlistMorceau().subscribe((dataM) => {
      this.morceauList = dataM;
    });

    this.apiPlayListBrokerService.recupererlistUser().subscribe((dataU) => {
      this.userList = dataU;
    });
  }


}
