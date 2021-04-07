import {Component, OnInit} from '@angular/core';
import {Morceau} from '../Morceau';
import {ApiPlaylistBrokerService} from '../api-playlist-broker.service';

@Component({
  selector: 'app-lister-morceau',
  templateUrl: './lister-morceau.component.html',
  styleUrls: ['./lister-morceau.component.css']
})
export class ListerMorceauComponent implements OnInit {
  morceau: Morceau[] = [];

  constructor(private apiPlayListBrokerService: ApiPlaylistBrokerService) {
  }

  ngOnInit(): void {
    this.apiPlayListBrokerService.recupererlistMorceau().subscribe((data) => {
      this.morceau = data;
    });
  }

}
