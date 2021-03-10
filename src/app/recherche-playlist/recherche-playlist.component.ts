import { Component, OnInit } from '@angular/core';
import {PlayList} from '../PlayList';
import {ApiPlaylistBrokerService} from '../api-playlist-broker.service';

@Component({
  selector: 'app-recherche-playlist',
  templateUrl: './recherche-playlist.component.html',
  styleUrls: ['./recherche-playlist.component.css']
})
export class RecherchePlaylistComponent implements OnInit {

  nomPlayList: string;
  caractere: string;
  historylist: any[] = [];
  constructor(private apiPlayListBrokerService: ApiPlaylistBrokerService) { }

  ngOnInit(): void {
    // 生命周期函数
    const searchlist: any = this.apiPlayListBrokerService.getHisotrySearchList('searchlist');

    if (searchlist){
      this.historylist = searchlist;
    }
  }

  doSearch(): void{
    // != -1 , exist, don't push again

    if (this.historylist.indexOf(this.caractere) === -1) {

      this.historylist.push(this.caractere);


    // stock the keywords in the service list
      this.apiPlayListBrokerService.setHisotrySearchList('searchlist', this.historylist);
    }
    this.caractere = '';
    console.log(this.nomPlayList);
/*
    if ((this.nomPlayList !== '') && (this.caractere !== '')){
      this.historylist.push(this.caractere);
      this.caractere = '';
      console.log(this.caractere);
      this.historylist.push(this.nomPlayList);
      this.nomPlayList = '';
      console.log(this.nomPlayList);
    }
    else{
      if (this.nomPlayList === '') {
        this.historylist.push(this.caractere);
        this.caractere = '';
        console.log(this.caractere);
      } else {
        this.historylist.push(this.nomPlayList);
        this.nomPlayList = '';
      }
    }
 */
  }

  deletehistory(key): void{
    alert(key);
    this.historylist.splice(key, 1);

  }
}
