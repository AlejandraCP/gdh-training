import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { CursoModel } from '../models/cursos';
import { CursoModel } from './../models/cursos';


@Injectable()
export class MisCursosService {
  cursosList: AngularFireList<any>;
  newCourse: CursoModel = new CursoModel();

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

  insertCourse(cursoModel: CursoModel) {
    this.cursosList.push({
      cursoId: cursoModel.cursoId,
      descripcionCurso: cursoModel.descripcionCurso,
      expositor_Id: cursoModel.expositor_Id,
      horario: cursoModel.horario,
      imgCursoArchivo:cursoModel.imgCursoArchivo,
      imgUrl: cursoModel.imgUrl,
      lugar: cursoModel.lugar,
      manualArchivo: cursoModel.manualArchivo,
      nombreManual: cursoModel.nombreManual,
      
    })

  }





}