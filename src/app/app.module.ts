import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import for "Shared" module into Main app Module
import { SharedModule } from './shared/shared.module'
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
//import { LoginPageComponent } from './fun-facts/login-page/login-page.component';



@NgModule({
  declarations: [
    AppComponent,
    //LoginPageComponent
  ],

  /*
  Imports are when modules will be ALWAYS placed.

  However, all components (which are citizens of modules) will be placed
  inside the declaration.
  */
  imports: [
    BrowserModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
