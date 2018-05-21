import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from "@angular/router";

// import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { AngularFireModule } from 'angularfire2';
import { AngularFirestore, AngularFirestoreModule } from "angularfire2/firestore";
import { AppComponent } from './app.component';
import { StartingComponent } from './starting/starting.component';
import { SurveyComponent } from './survey/survey.component';
import { EndComponent } from './end/end.component';
import { PersistingService } from './SvcPersisting/persisting.service';


  // Initialize Firebase
  export const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  }

  

@NgModule({
  declarations: [
    AppComponent,
    StartingComponent,
    SurveyComponent,
    EndComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    // MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      {path: '', component: StartingComponent },
      {path: 'survey', component: SurveyComponent },
      {path: 'end', component: EndComponent },
    ])
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    PersistingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
