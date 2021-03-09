import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PlayList} from './PlayList';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiPlaylistBrokerService {

  private url = 'http://localhost:3000/api/playlists';

  constructor(private httpClient: HttpClient) { }

  public recupererlist(): Observable<PlayList[]> {
    return this.httpClient.get<PlayList[]>(this.url);
  }

  public getPlayList(idPlayList: number): Observable<PlayList[]>{
    return this.httpClient.get<PlayList[]>(this.url + '/' + idPlayList);
  }


  public ajouterPlayList(playList: PlayList) {
    this.httpClient.post<PlayList>(this.url, playList)
      .subscribe(
        (response) => {console.log(response); }
        , (error) => {console.log('Error ajouter'); }
      );
  }
}
