import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { AngularFirestore } from "angularfire2/firestore";
import * as firebase from "firebase";
import { CursoModel } from "../models/cursos";

@Injectable()
export class MisCursosService {
  cursosList: AngularFireList<any>;
  newCourse: CursoModel = new CursoModel();

  private CARPETA_IMAGENES = "img";

  constructor(
    private db: AngularFirestore,
    private firebasedb: AngularFireDatabase
  ) {}

  getCursos() {
    this.cursosList = this.firebasedb.list("cursos");
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
      imgCursoArchivo: cursoModel.imgCursoArchivo,
      imgNombre: cursoModel.imgNombre,
      imgUrl: cursoModel.imgUrl,
      lugar: cursoModel.lugar,
      manualArchivo: cursoModel.manualArchivo,
      nombreManual: cursoModel.nombreManual,
      urlManual: cursoModel.urlManual,
      nombreCertificado: cursoModel.nombreCertificado,
      nombreCurso: cursoModel.nombreCurso,
      numSesiones: cursoModel.numSesiones,
      objetivos: cursoModel.objetivos,
      silabusArchivo: cursoModel.silabusArchivo,
      nombreSilabus: cursoModel.nombreSilabus,
      urlSilabus: cursoModel.urlSilabus,
      tipoCurso_Id: cursoModel.tipoCurso_Id,
      totalHoras: cursoModel.totalHoras,
      totalVacantes: cursoModel.totalVacantes
    });
  }

  updateCourse(cursoModel: CursoModel) {
    this.cursosList.update(cursoModel.$key, {
      cursoId: cursoModel.cursoId,
      descripcionCurso: cursoModel.descripcionCurso,
      expositor_Id: cursoModel.expositor_Id,
      horario: cursoModel.horario,
      imgCursoArchivo: cursoModel.imgCursoArchivo,
      imgNombre: cursoModel.imgNombre,
      imgUrl: cursoModel.imgUrl,
      lugar: cursoModel.lugar,
      manualArchivo: cursoModel.manualArchivo,
      nombreManual: cursoModel.nombreManual,
      urlManual: cursoModel.urlManual,
      nombreCertificado: cursoModel.nombreCertificado,
      nombreCurso: cursoModel.nombreCurso,
      numSesiones: cursoModel.numSesiones,
      objetivos: cursoModel.objetivos,
      silabusArchivo: cursoModel.silabusArchivo,
      nombreSilabus: cursoModel.nombreSilabus,
      urlSilabus: cursoModel.urlSilabus,
      tipoCurso_Id: cursoModel.tipoCurso_Id,
      totalHoras: cursoModel.totalHoras,
      totalVacantes: cursoModel.totalVacantes
    });
  }
}
