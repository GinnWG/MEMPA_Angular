import {Component, OnInit} from '@angular/core';
import {ApiPlaylistBrokerService} from '../api-playlist-broker.service';
import {HttpClient} from '@angular/common/http';
import {User} from '../User';
import {Router} from "@angular/router";

@Component({
  selector: 'app-ajouter-user',
  templateUrl: './ajouter-user.component.html',
  styleUrls: ['./ajouter-user.component.css']
})
export class AjouterUserComponent implements OnInit {
  user: User;
  nomUser = '';

  constructor(private apiPlayListBrokerService: ApiPlaylistBrokerService,
              private router: Router,
              private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.user = new User();
  }

  validUser(): void {
    let err = document.getElementById('error');
    let nomUser = this.user.nomUser;

    if (nomUser == null)  {
      err.className += " error";
      err.style.display="block";
    } else {
      err.style.display="none";
      this.apiPlayListBrokerService.ajouterUser(this.user);
      this.router.navigate(['/listeruser']);
    }
  }

}
