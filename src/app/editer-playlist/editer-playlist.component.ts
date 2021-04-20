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
  nomUser: string;
  titre: string;

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

  ajouterContributeur(idPlayList: number, nomUser: string, titre: string): void {
    // for (let i = 0; i < this.userList.length; i++) {
    // if (nomUser === this.userList[i].nomUser) {
    alert(this.nomUser + ' ' + idPlayList);
    this.apiPlayListBrokerService.ajouterUserMusicInPlaylist(idPlayList, nomUser, titre);
    //  }}
    document.location.reload();
  }


  getArtistbyMusic(titre: string): string {
    for (let i = 0; i < this.morceauList.length; i++) {
      if (this.morceauList[i].titre === titre) {
        return this.morceauList[i].artiste;
      }
    }
    return '';

  }

}

