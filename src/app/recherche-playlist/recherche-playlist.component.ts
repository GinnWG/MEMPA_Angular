import {Component, OnInit} from '@angular/core';
import {PlayList} from '../PlayList';
import {ApiPlaylistBrokerService} from '../api-playlist-broker.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-recherche-playlist',
  templateUrl: './recherche-playlist.component.html',
  styleUrls: ['./recherche-playlist.component.css']
})
export class RecherchePlaylistComponent implements OnInit {
  playlist: PlayList;
  nomPlayList = '';
  nomCreateur = '';
  caractere = '';
  historylist: any[] = [];
  result: PlayList[];

  constructor(private apiPlayListBrokerService: ApiPlaylistBrokerService,
              private httpClient: HttpClient,
              private router: Router,
              private routeactive: ActivatedRoute) {
  }

  ngOnInit(): void {
    // 生命周期函数
    // console.log('hello');
    const idPlayList = this.routeactive.snapshot.params.idPlayList;


    this.apiPlayListBrokerService.getPlayList(idPlayList).subscribe((data) => {
      this.playlist = data;
    });


    const searchlist: any = this.apiPlayListBrokerService.getHisotrySearchList('searchlist');

    if (searchlist) {
      this.historylist = searchlist;
    }
  }

  doSearch(): void {
    //  let isPushed = false;
    // isPush : Boolean ;
    // != -1 , exist, don't push again
    if (this.caractere === '' && this.nomPlayList === '' && this.nomCreateur === '') {
      console.log('Veuillez remplir au moins un champs :)');
    }
    else {

      if (this.nomPlayList !== '') {
        if (this.historylist.indexOf(this.nomPlayList) === -1) {

          this.historylist.push(this.nomPlayList);
          // isPushed = true;
          // stock the keywords in the service list
          this.apiPlayListBrokerService.setHisotrySearchList('searchlist', this.historylist);
        }
        this.nomPlayList = '';
        console.log(this.nomPlayList);
      }
      else if (this.caractere !== '') {

        if (this.historylist.indexOf(this.caractere) === -1) {

          this.historylist.push(this.caractere);


          // stock the keywords in the service list
          this.apiPlayListBrokerService.setHisotrySearchList('searchlist', this.historylist);
        }
        this.caractere = '';
        console.log(this.caractere);
      }

      else {
        console.log('vide');
      }
    }
  }

  deletehistory(key): void {
    alert(key);
    this.historylist.splice(key, 1);
  }

  search(): void {
    this.apiPlayListBrokerService.search(this.nomPlayList, this.nomCreateur, this.caractere)
      .subscribe(res => {
          this.result = res;
        }, err => {
        }
      );

  }

  saveHistory(): void {
    if (this.historylist.indexOf(this.nomPlayList) === -1 && this.nomPlayList !== '') {
      this.historylist.push(this.nomPlayList);
      this.apiPlayListBrokerService.setHisotrySearchList('searchlist', this.historylist);
    }
    if (this.historylist.indexOf(this.caractere) === -1 && this.caractere !== '') {
      this.historylist.push(this.caractere);
      this.apiPlayListBrokerService.setHisotrySearchList('searchlist', this.historylist);
    }
  }

  onClickSearch(): void {
    if (this.caractere === '' && this.nomPlayList === '' && this.nomCreateur === '') {
      alert('vide');
    }
    else {
      this.saveHistory();
      this.search();
    }
  }

  /*SORT*/
  sortNbClic(): void {
    var list: PlayList[];
    list = this.result;
    list.sort((a, b) => (a.nbClic < b.nbClic) ? 1 : -1);
  }

  sortNbClicInverse(): void {
    var list: PlayList[];
    list = this.result;
    list.sort((a, b) => (a.nbClic > b.nbClic) ? 1 : -1);
  }

  sortNom(): void {
    var list: PlayList[];
    list = this.result;
    list.sort((a, b) => (a.nomPlayList.toUpperCase() > b.nomPlayList.toUpperCase()) ? 1 : -1);
  }

  sortNomInverse(): void {
    var list: PlayList[];
    list = this.result;
    list.sort((a, b) => (a.nomPlayList.toUpperCase() < b.nomPlayList.toUpperCase()) ? 1 : -1);
  }

  sortStyle(): void {
    var list: PlayList[];
    list = this.result;
    list.sort((a, b) => (a.caractere.toUpperCase() > b.caractere.toUpperCase()) ? 1 : -1);
  }

  sortStyleInverse(): void {
    var list: PlayList[];
    list = this.result;
    console.log(list);
    list.sort((a, b) => (a.caractere.toUpperCase() < b.caractere.toUpperCase()) ? 1 : -1);
  }
  /*SORT*/

}
