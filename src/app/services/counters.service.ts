import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Injectable()
export class CountersService {

  counterList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getCounters() {
    this.counterList = this.firebase.list('counters');
    return this.counterList;
  }

  updateTeacherId($key: string, teacherId: number) {
    this.counterList.update($key, {teacherId: teacherId})

  }

}
