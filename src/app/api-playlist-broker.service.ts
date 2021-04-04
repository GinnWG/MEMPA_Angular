import {Injectable} from '@angular/core';
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

  constructor(private httpClient: HttpClient) {
  }

  public recupererlist(): Observable<PlayList[]> {
    return this.httpClient.get<PlayList[]>(this.url);
  }

  public getPlayList(idPlayList: number): Observable<PlayList> {
    return this.httpClient.get<PlayList>(this.url + '/' + idPlayList);
  }

  public getPlayListparNom(nomPlayList: string): Observable<PlayList> {
    return this.httpClient.get<PlayList>(this.url + '/' + nomPlayList);
  }


  public ajouterPlayList(playList: PlayList): void {
    this.httpClient.post<PlayList>(this.url, playList)
      .subscribe(
        (response) => {
          console.log(response);
        }
        , (error) => {
          console.log('Error ajouter');
        }
      );
  }

  sortNomPlayList(idPlayList: Array<number>): Observable<PlayList[]> {
    let nom = new Array();
    let listsort = [];
    for (const id of idPlayList) {
      nom = PlayList[id].nomPlayList;
    }
    const sorted = nom.sort();
    for (const nompl of sorted){
      listsort = this.getPlayListparNom(nompl);
    }
    return ;

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

  search(nomPlaylist: string, style: string): Observable<PlayList[]> {
    const param = {nomPlayList: nomPlaylist, caractere: style};
    return this.httpClient.get<PlayList[]>(this.url + '/search', {params: param});

  }


}
