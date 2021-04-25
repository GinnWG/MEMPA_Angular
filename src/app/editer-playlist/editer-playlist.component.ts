import {Component, OnInit} from '@angular/core';
import {ApiPlaylistBrokerService} from '../api-playlist-broker.service';
import {Morceau} from '../Morceau';
import {User} from '../User';
import {PlayList} from '../PlayList';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Ajoute} from '../Ajoute';

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
  newcontributor: string;
  newtitle: string;
  ajoute: Ajoute;
  listpl: PlayList[] = [];

  constructor(private apiPlayListBrokerService: ApiPlaylistBrokerService,
              private httpClient: HttpClient,
              private router: Router,
              private routeactive: ActivatedRoute) {
  }

  ngOnInit(): void {
    const idPlayList = this.routeactive.snapshot.params.idPlayList;
    const listpl = this.apiPlayListBrokerService.recupererlist();

    this.apiPlayListBrokerService.recupererlist().subscribe((dataPl) => {
      this.listpl = dataPl;
    });

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

  ajouterContributorTitle(idPlayList: number): void {

    const ajoute = new Ajoute(this.newcontributor, this.newtitle);
    let present = false;
    let i = 0;
    while (!present && i < this.playlist.listMorceau.length) {
      alert(this.newtitle + ' ' + this.listpl[idPlayList].listMorceau[i].titre);
      if (this.newtitle === this.playlist.listMorceau[i].titre ) {
        alert('in the if');
        present = true;
      }
      i++;
    }
    alert(present);
    if (!present) {
      this.apiPlayListBrokerService.ajouterUserMusicInPlaylist(idPlayList, ajoute);
    } else {
      alert('Morceau present!');
    }
    document.location.reload();
  }

}

