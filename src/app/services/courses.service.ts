import { Injectable } from '@angular/core';
// import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';    
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
@Injectable()
export class CoursesService {
  cursosList: AngularFireList<any>;

  constructor( private firebase: AngularFireDatabase) { }
  
  getCursos() {
    this.cursosList = this.firebase.list('cursos');
    return this.cursosList;
   }

  //  getCursos() {
  //    return this.cursos;
  //  }

}
