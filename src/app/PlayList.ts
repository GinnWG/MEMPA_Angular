import {User} from './User';
import {Morceau} from './Morceau';

export class PlayList {
  idPlayList: number;
  nomPlayList: string;
  nomCreateur: string;
  nbClic: number;
  caractere: string;
  listMorceau: Array<Morceau>;
  listContributeur: Array<User>;
}
