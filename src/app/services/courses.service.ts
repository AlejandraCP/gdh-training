import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
@Injectable()
export class CoursesService {
  cursosColletion: AngularFirestoreCollection<any>;
  cursos: Observable<{}[]>;
  cursosDoc: AngularFirestoreDocument<any>;

  constructor( public angularFirestore: AngularFirestore) {
    this.cursos = angularFirestore.collection('cursos').valueChanges();
   }

   getCursos() {
     return this.cursos;
   }

}
