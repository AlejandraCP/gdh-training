import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Injectable()
export class BoolSelectExpoService {
  boolSelectList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getBoolSelect() {
    this.boolSelectList = this.firebase.list('booleanCreateExpo');
    return this.boolSelectList;
  }

  updateBoolAny($key: string, flag1: boolean, flag2: boolean, flag3: boolean) {
    this.boolSelectList.update($key, 
      { 
        create: flag1,
        option: flag2,
        select: flag3
      }
      )
  }

}
