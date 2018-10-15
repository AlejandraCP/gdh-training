import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';

@Injectable()
export class InscripcionesService {

  inscripcionesList: AngularFireList<any>;
  horariosList: AngularFireList<any>;


  constructor(private firebase: AngularFireDatabase) { }

  getInscripciones() {
    this.inscripcionesList = this.firebase.list('inscripciones');
    return this.inscripcionesList;
  }

  getInscripcionesCurso($key) {
    this.inscripcionesList = this.firebase.list('inscripciones/'+$key);
    return this.inscripcionesList;
  }

}
