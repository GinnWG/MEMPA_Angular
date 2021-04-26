export class Ajoute {
  constructor(newcontributor: string, newtitle: string, idmusic: number) {
    this.newtitle = newtitle;
    this.newcontributor = newcontributor;
    this.idmusic = idmusic;
  }

  newtitle: string;
  newcontributor: string;
  idmusic: number;
}
