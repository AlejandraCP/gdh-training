import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { CursoModel } from '../models/cursos';


@Injectable()
export class MisCursosService {
  cursosList: AngularFireList<any>;

  private CARPETA_IMAGENES = 'img';

  constructor( private db: AngularFirestore, private firebase: AngularFireDatabase) { }

  getCursos() {
    this.cursosList = this.firebase.list('cursos');
    return this.cursosList;
  }

  // cargarImagenesFirebase( curso: CursoModel[]){
  
    
  // }

  // private saveCursoImg(cursoImg: {nombre: string, url: string}){
  //   this.db.collection(`/${this.CARPETA_IMAGENES}`).add(cursoImg);
  // }






}
