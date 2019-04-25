import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireFunctionsModule, FunctionsRegionToken } from '@angular/fire/functions';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';

import { TwitterService } from './services/twitter.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireFunctionsModule
  ],
  providers: [
    TwitterService,
    { provide: FunctionsRegionToken,  useValue: 'us-central1' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
