import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PlayList} from './PlayList';
import {Observable} from 'rxjs';
import {Morceau} from './Morceau';
import {User} from './User';

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

  public getPlayListbyNom(nomPlayList: string): Observable<PlayList> {
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

  /*
  sortNomPlayList(idPlayList: Array<number>): Observable<PlayList[]> {
    let nom = new Array();
    let listsort = [];
    for (const id of idPlayList) {
      nom = PlayList[id].nomPlayList;
    }
    const sorted = nom.sort();
    for (const nompl of sorted){
      listsort = this.getPlayListbyNom(nompl);
    }
    return ;

  }
*/
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

  public ajouterMorceau(morceau: Morceau): void {
    this.httpClient.post<Morceau>(this.url, morceau)
      .subscribe(
        (response) => {
          console.log(response);
        }
        , (error) => {
          console.log('Error ajouter');
        }
      );
  }

  public recupererlistMorceau(): Observable<Morceau[]> {
    return this.httpClient.get<Morceau[]>(this.url);
  }

  searchMorceau(titre: string, artiste: string): Observable<Morceau[]> {
    const param = {Titre: titre, Artiste: artiste};
    return this.httpClient.get<Morceau[]>(this.url + '/search', {params: param});
    /*
      (this.url + '/search', {params: param});  --------->
      c'est faut et il faut changer, parce qu'il est dans la page editer playlist <Version 3>
    */
  }

  public ajouterUser(nomUser: string): void {
    this.httpClient.post<User>(this.url, nomUser)
      .subscribe(
        (response) => {
          console.log(response);
        }
        , (error) => {
          console.log('Error ajouter');
        }
      );
  }

  public recupererlistUser(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url);
  }

  searchUser(nomUser: string): Observable<User[]> {
    const param = {userName: nomUser};
    return this.httpClient.get<User[]>(this.url + '/search', {params: param});
    /*
      (this.url + '/search', {params: param});  --------->
      c'est faux et il faut changer, parce qu'il est dans la page editer playlist <Version 3>
    */
  }


}
