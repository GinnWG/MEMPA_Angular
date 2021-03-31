import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PlayList} from './PlayList';
import {Observable} from 'rxjs';
import {ajaxGetJSON} from 'rxjs/internal-compatibility';
import {stringify} from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class ApiPlaylistBrokerService {

  private url = 'http://localhost:3000/api/playlists';

  constructor(private httpClient: HttpClient) { }

  public recupererlist(): Observable<PlayList[]> {
    return this.httpClient.get<PlayList[]>(this.url);
  }

  public getPlayList(idPlayList: number): Observable<PlayList>{
    return this.httpClient.get<PlayList>(this.url + '/' + idPlayList);
  }


  public ajouterPlayList(playList: PlayList): void {
    this.httpClient.post<PlayList>(this.url, playList)
      .subscribe(
        (response) => {console.log(response); }
        , (error) => {console.log('Error ajouter'); }
      );
  }

  setHisotrySearchList(key: any, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getHisotrySearchList(key: any): void {
    return JSON.parse(localStorage.getItem(key));
  }

  removeHisotrySearchList(key: any): void {
    localStorage.removeItem(key);
  }

}
