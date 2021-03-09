import {User} from './User';
import {Morceau} from './Morceau';

export class PlayList {
  idPlayList: number;
  nomPlayList: string;
  nomCreateur: string;
  nbClic = 0 ;
  caractere: string;
  listMorceau: Morceau[] = new Array();
  listContributeur: User[] = new Array();
}
