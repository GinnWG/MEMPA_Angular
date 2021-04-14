import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap' ;
import {AppComponent} from './app.component';
import {ListerPlaylistComponent} from './lister-playlist/lister-playlist.component';
import {DetailPlaylistComponent} from './detail-playlist/detail-playlist.component';
import {AjouterPlaylistComponent} from './ajouter-playlist/ajouter-playlist.component';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {SplashComponent} from './splash/splash.component';
import {RecherchePlaylistComponent} from './recherche-playlist/recherche-playlist.component';
import {HttpClientModule} from '@angular/common/http';
import {ApiPlaylistBrokerService} from './api-playlist-broker.service';
import { AjouterMorceauComponent } from './ajouter-morceau/ajouter-morceau.component';
import { ContactComponent } from './contact/contact.component';
import { ListerMorceauComponent } from './lister-morceau/lister-morceau.component';
import { AjouterUserComponent } from './ajouter-user/ajouter-user.component';
import { ListerUserComponent } from './lister-user/lister-user.component';
import { EditerPlaylistComponent } from './editer-playlist/editer-playlist.component';

const appRoutes: Routes = [
  // 1 route par module
  {path: 'splash', component: SplashComponent},
  {path: 'ajouter', component: AjouterPlaylistComponent},
  {path: 'lister', component: ListerPlaylistComponent},
  {path: 'rechercher', component: RecherchePlaylistComponent},
  {path: 'details/:idPlayList', component: DetailPlaylistComponent},
  {path: 'ajoutermorceau', component: AjouterMorceauComponent},
  {path: 'listermorceau', component: ListerMorceauComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'ajouteruser', component: AjouterUserComponent},
  {path: 'listeruser', component: ListerUserComponent},
  {path: '', component: SplashComponent},
  {path: '**', component: SplashComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListerPlaylistComponent,
    DetailPlaylistComponent,
    AjouterPlaylistComponent,
    SplashComponent,
    RecherchePlaylistComponent,
    AjouterMorceauComponent,
    ContactComponent,
    ListerMorceauComponent,
    AjouterUserComponent,
    ListerUserComponent,
    EditerPlaylistComponent

  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule


  ],
  providers: [ApiPlaylistBrokerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
