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
import { ListerContactComponent } from './lister-contact/lister-contact.component';

const appRoutes: Routes = [
  // 1 route par module
  {path: 'splash', component: SplashComponent},
  {path: 'ajouter', component: AjouterPlaylistComponent},
  {path: 'lister', component: ListerPlaylistComponent},
  {path: 'rechercher', component: RecherchePlaylistComponent},
  {path: 'details/:nomplaylist', component: DetailPlaylistComponent},
  {path: '', component: SplashComponent},
  {path: '**', component: SplashComponent},
  {path: 'contact', component: ListerContactComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    ListerPlaylistComponent,
    DetailPlaylistComponent,
    AjouterPlaylistComponent,
    SplashComponent,
    RecherchePlaylistComponent,
    ListerContactComponent

  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
