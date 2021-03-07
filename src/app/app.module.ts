import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap' ;
import { AppComponent } from './app.component';
import { ListerPlaylistComponent } from './lister-playlist/lister-playlist.component';
import { DetailPlaylistComponent } from './detail-playlist/detail-playlist.component';
import { AjouterPlaylistComponent } from './ajouter-playlist/ajouter-playlist.component';
import {FormsModule} from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    ListerPlaylistComponent,
    DetailPlaylistComponent,
    AjouterPlaylistComponent

  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
