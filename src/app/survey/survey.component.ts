import { Component, OnInit, Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { PersistingService } from '../SvcPersisting/persisting.service';


@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  imgSrcVar;
  placeholder = 0;

  selectedRating;

  userUID;

  MaleARating;
  MaleSRating;
  FemaleARating;
  FemaleSRating;

  constructor(private afs: AngularFirestore, private router: Router, private persisting: PersistingService) { }

  
  ngOnInit(){
    this.placeholder = 0;
    console.log('ngOnInit running w/ placeholder: ' + this.placeholder);
    this.switchImage();
  }

  next(){
    console.log(this.selectedRating + ' was saved away');

      

    if(this.placeholder == 0){
      this.MaleARating = this.selectedRating;
    } if(this.placeholder == 1){
      this.MaleSRating = this.selectedRating;
    } if(this.placeholder == 2){
      this.FemaleARating = this.selectedRating;
    } if(this.placeholder == 3){
      this.FemaleSRating = this.selectedRating;
    }

    console.log('MaleARating: ' + this.MaleARating);
    console.log('MaleSRating: ' + this.MaleSRating);
    console.log('FemaleARating: ' + this.FemaleARating);
    console.log('FemaleSRating: ' + this.FemaleSRating);  


    if(this.placeholder == 3){
      this.uploadAll();
    }

    this.placeholder++;
    console.log('Running next()');
    console.log('Placeholder value: ' + this.placeholder);
    this.switchImage();
  }

  last(){
    if(this.placeholder >= 1){
      this.placeholder--;
      console.log('Running next()');
      console.log('Placeholder value: ' + this.placeholder);
      this.switchImage();  
    }
  }

  switchImage(){

    switch (this.placeholder) {
      case 0:
        this.imgSrcVar = "../assets/Male Asymmetrical.jpg";
        break;
      case 1:
        this.imgSrcVar = "../assets/Male Symmetrical.jpg";
        break;
      case 2:
        this.imgSrcVar = "../assets/Female Asymmetrical.jpg";
        break;
      case 3:
        this.imgSrcVar = "../assets/Female Symmetrical.jpg";
        break;
      case 4:
        this.showCompleted();
        break;
    }
  }

  saveAwayCurrentRating(rating){
    this.selectedRating = rating;
    console.log('Saved way: ' + this.selectedRating);
  }

  uploadAll(){
    console.log('Uploading all');

    //Generate a new UID
    this.userUID = this.afs.createId();

    //Add to Firestore under Users
    this.afs.collection('Users').doc(this.userUID).set({
      userUID: this.userUID,
      MaleA: this.MaleARating,
      MaleS: this.MaleSRating,
      FemaleA: this.FemaleARating,
      FemaleS: this.FemaleSRating
    }).then(() => {
      console.log('Created and uploaded userUID: ' + this.userUID);
    });

    //Persist (for later use)
    this.persisting.changeUserUID(this.userUID);
    
  }

  showCompleted(){
    console.log('Survey complete! Thank you');
    this.router.navigateByUrl('end');
  }

}
