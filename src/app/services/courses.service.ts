import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
@Injectable()
export class CoursesService {
  cursosColletion: AngularFirestoreCollection<any>;
  cursos: Observable<{}[]>;
  cursosDoc: AngularFirestoreDocument<any>;
  session1List: AngularFireList<any>;
  session2List: AngularFireList<any>;
  session3List: AngularFireList<any>;
  session4List: AngularFireList<any>;

  constructor( public angularFirestore: AngularFirestore, public firebase: AngularFireDatabase) {
    this.cursos = angularFirestore.collection('cursos').valueChanges();
   }

   getCursos() {
     return this.cursos;
   }

   getSession1(){
    this.session1List = this.firebase.list('cursos/sesion1');
    return this.session1List;
   }
   getSession2(){
    this.session2List = this.firebase.list('cursos/sesion2');
    return this.session2List;
   }
   getSession3(){
    this.session3List = this.firebase.list('cursos/sesion3');
    return this.session3List;
   }
   getSession4(){
    this.session4List = this.firebase.list('cursos/sesion4');
    return this.session4List;
   }

}
