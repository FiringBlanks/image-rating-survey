import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class PersistingService {

  constructor() { }

  private messageSource = new BehaviorSubject<string>("");
  userUID = this.messageSource.asObservable();

  changeUserUID(arg: string){
    this.messageSource.next(arg);
  }

}
