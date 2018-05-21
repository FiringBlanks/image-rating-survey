import { Component, OnInit, Injectable } from '@angular/core';
import { Chart } from 'chart.js';
import 'rxjs/add/operator/map';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from "rxjs/Observable";
import { PersistingService } from '../SvcPersisting/persisting.service';

interface Submission{
  userUID,
  MaleA,
  MaleS,
  FemaleA,
  FemaleS
}

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.css']
})
export class EndComponent implements OnInit {

  submissionsCollection: AngularFirestoreCollection<Submission>;
  submissions: Observable<Submission[]>

  chart1 = [];
  chart2 = [];
  chart3 = [];
  chart4 = [];
  labels = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  numberUsers;

  userUID;

  MA = [];
  counterIndex = 0;

  MA1 = 0;
  MA2 = 0;
  MA3 = 0;
  MA4 = 0;
  MA5 = 0;
  MA6 = 0;
  MA7 = 0;
  MA8 = 0;
  MA9 = 0;
  MA10 = 0;

  MS1 = 0;
  MS2 = 0;
  MS3 = 0;
  MS4 = 0;
  MS5 = 0;
  MS6 = 0;
  MS7 = 0;
  MS8 = 0;
  MS9 = 0;
  MS10 = 0;

  FA1 = 0;
  FA2 = 0;
  FA3 = 0;
  FA4 = 0;
  FA5 = 0;
  FA6 = 0;
  FA7 = 0;
  FA8 = 0;
  FA9 = 0;
  FA10 = 0;

  FS1 = 0;
  FS2 = 0;
  FS3 = 0;
  FS4 = 0;
  FS5 = 0;
  FS6 = 0;
  FS7 = 0;
  FS8 = 0;
  FS9 = 0;
  FS10 = 0;


  constructor(private afs: AngularFirestore, private persistingData: PersistingService) { }

  ngOnInit() {

    this.persistingData.userUID.subscribe(message => this.userUID = message);

    this.getCountOfUsers();
    this.getSubmissions();
    
  }

  getCountOfUsers(){
    this.afs.collection('Users').ref.get().then((snapshot) => {
      this.numberUsers = snapshot.size;

      snapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());

        if(doc.data().MaleA == 1){
          this.MA1++;
        } if (doc.data().MaleA == 2) {
          this.MA2++;
        } if (doc.data().MaleA == 3) {
          this.MA3++;
        } if (doc.data().MaleA == 4) {
          this.MA4++;
        } if (doc.data().MaleA == 5) {
          this.MA5++;
        } if (doc.data().MaleA == 6) {
          this.MA6++;
        } if (doc.data().MaleA == 7) {
          this.MA7++;
        } if (doc.data().MaleA == 8) {
          this.MA8++;
        } if (doc.data().MaleA == 9) {
          this.MA9++;
        } if (doc.data().MaleA == 10) {
          this.MA10++;
        }

        if(doc.data().MaleS == 1){
          this.MS1++;
        } if (doc.data().MaleS == 2) {
          this.MS2++;
        } if (doc.data().MaleS == 3) {
          this.MS3++;
        } if (doc.data().MaleS == 4) {
          this.MS4++;
        } if (doc.data().MaleS == 5) {
          this.MS5++;
        } if (doc.data().MaleS == 6) {
          this.MS6++;
        } if (doc.data().MaleS == 7) {
          this.MS7++;
        } if (doc.data().MaleS == 8) {
          this.MS8++;
        } if (doc.data().MaleS == 9) {
          this.MS9++;
        } if (doc.data().MaleS == 10) {
          this.MS10++;
        }

        if(doc.data().FemaleA == 1){
          this.FA1++;
        } if (doc.data().FemaleA == 2) {
          this.FA2++;
        } if (doc.data().FemaleA == 3) {
          this.FA3++;
        } if (doc.data().FemaleA == 4) {
          this.FA4++;
        } if (doc.data().FemaleA == 5) {
          this.FA5++;
        } if (doc.data().FemaleA == 6) {
          this.FA6++;
        } if (doc.data().FemaleA == 7) {
          this.FA7++;
        } if (doc.data().FemaleA == 8) {
          this.FA8++;
        } if (doc.data().FemaleA == 9) {
          this.FA9++;
        } if (doc.data().FemaleA == 10) {
          this.FA10++;
        }


        if(doc.data().FemaleS == 1){
          this.FS1++;
        } if (doc.data().FemaleS == 2) {
          this.FS2++;
        } if (doc.data().FemaleS == 3) {
          this.FS3++;
        } if (doc.data().FemaleS == 4) {
          this.FS4++;
        } if (doc.data().FemaleS == 5) {
          this.FS5++;
        } if (doc.data().FemaleS == 6) {
          this.FS6++;
        } if (doc.data().FemaleS == 7) {
          this.FS7++;
        } if (doc.data().FemaleS == 8) {
          this.FS8++;
        } if (doc.data().FemaleS == 9) {
          this.FS9++;
        } if (doc.data().FemaleS == 10) {
          this.FS10++;
        }





      });
    }).then(() => {
      console.log('Running then of get snapshot');

      console.log('MA1 count: ' + this.MA1);
      console.log('MA2 count: ' + this.MA2);
      console.log('MA3 count: ' + this.MA3);
      console.log('MA4 count: ' + this.MA4);
      console.log('MA5 count: ' + this.MA5);
      console.log('MA6 count: ' + this.MA6);
      console.log('MA7 count: ' + this.MA7);
      console.log('MA8 count: ' + this.MA8);
      console.log('MA9 count: ' + this.MA9);
      console.log('MA10 count: ' + this.MA10);

      console.log('');

      console.log('MS1 count: ' + this.MS1);
      console.log('MS2 count: ' + this.MS2);
      console.log('MS3 count: ' + this.MS3);
      console.log('MS4 count: ' + this.MS4);
      console.log('MS5 count: ' + this.MS5);
      console.log('MS6 count: ' + this.MS6);
      console.log('MS7 count: ' + this.MS7);
      console.log('MS8 count: ' + this.MS8);
      console.log('MS9 count: ' + this.MS9);
      console.log('MS10 count: ' + this.MS10);

      console.log('');

      console.log('FA1 count: ' + this.FA1);
      console.log('FA2 count: ' + this.FA2);
      console.log('FA3 count: ' + this.FA3);
      console.log('FA4 count: ' + this.FA4);
      console.log('FA5 count: ' + this.FA5);
      console.log('FA6 count: ' + this.FA6);
      console.log('FA7 count: ' + this.FA7);
      console.log('FA8 count: ' + this.FA8);
      console.log('FA9 count: ' + this.FA9);
      console.log('FA10 count: ' + this.FA10);

      console.log('');

      console.log('FS1 count: ' + this.FS1);
      console.log('FS2 count: ' + this.FS2);
      console.log('FS3 count: ' + this.FS3);
      console.log('FS4 count: ' + this.FS4);
      console.log('FS5 count: ' + this.FS5);
      console.log('FS6 count: ' + this.FS6);
      console.log('FS7 count: ' + this.FS7);
      console.log('FS8 count: ' + this.FS8);
      console.log('FS9 count: ' + this.FS9);
      console.log('FS10 count: ' + this.FS10);
      
      this.populateChart1();
      this.populateChart2();
      this.populateChart3();
      this.populateChart4();

    });
  }

  

  tallyValues(doc, num){
    if(doc.data().MaleA == num){
      this.MA[num-1]++;
      console.log('Another');
      
    }
    console.log('Running tally w/ num ' + num);
    console.log(doc.data());
    
  }

  getSubmissions(){
    this.submissionsCollection = this.afs.collection('Users');
    this.submissions = this.submissionsCollection.valueChanges();
  }

  populateChart1(){
    this.chart1 = new Chart('canvas1', {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [{ 
          data: [0 , this.MA1, this.MA2, this.MA3, this.MA4, this.MA5, this.MA6, this.MA7, this.MA8, this.MA9, this.MA10]   //y-values (Occurances)
         }]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Rating'
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Occurances'
            }
          }],
        }
      }
    });
  }

  populateChart2(){
    this.chart2 = new Chart('canvas2', {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [{ 
          data: [0 , this.MS1, this.MS2, this.MS3, this.MS4, this.MS5, this.MS6, this.MS7, this.MS8, this.MS9, this.MS10]
         }]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Rating'
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Occurances'
            }
          }],
        }
      }
    });
  }

  populateChart3(){
    this.chart3 = new Chart('canvas3', {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [{ 
          data: [0 , this.FA1, this.FA2, this.FA3, this.FA4, this.FA5, this.FA6, this.FA7, this.FA8, this.FA9, this.FA10]
         }]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Rating'
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Occurances'
            }
          }],
        }
      }
    });
  }

  populateChart4(){
    this.chart4 = new Chart('canvas4', {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [{ 
          data: [0 , this.FS1, this.FS2, this.FS3, this.FS4, this.FS5, this.FS6, this.FS7, this.FS8, this.FS9, this.FS10]
         }]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Rating'
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Occurances'
            }
          }],
        }
      }
    });
  }

  

}
