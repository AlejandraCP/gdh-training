import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { UserGDH } from '../models/cursosGDH';

@Injectable()
export class CoursesService {
  cursosList: AngularFireList<any>;
  cursosListGroup: AngularFireList<any>;
  cursosListS1: AngularFireList<any> = this.firebase.list('cursos/sesion1');
  cursosListS2: AngularFireList<any> = this.firebase.list('cursos/sesion2');
  cursosListS3: AngularFireList<any> = this.firebase.list('cursos/sesion3');
  cursosListS4: AngularFireList<any> = this.firebase.list('cursos/sesion4');
  newUser: UserGDH = new UserGDH();

  constructor( private firebase: AngularFireDatabase) { }

  getCursos() {
    this.cursosList = this.firebase.list('cursos');
    return this.cursosList;
  }

  getGroup(group) {
  this.cursosListGroup = this.firebase.list(`cursos/${group}`);
    return this.cursosListGroup;
  }

  InsertUserS1(newUser: UserGDH) {
    this.cursosListS1.push({
      dni: newUser.dni,
      nombre: newUser.nombre,
      area: newUser.area,
      puesto: newUser.puesto,
      asistencia: newUser.asistencia,
      correo: newUser.correo,
      mesCapacitacion: newUser.mesCapacitacion,
      numHoras: newUser.numHoras,
      nombreCurso: newUser.nombreCurso
    })
  }

  InsertUserS2(newUser: UserGDH) {
    this.cursosListS2.push({
      dni: newUser.dni,
      nombre: newUser.nombre,
      area: newUser.area,
      puesto: newUser.puesto,
      asistencia: newUser.asistencia,
      correo: newUser.correo,
      mesCapacitacion: newUser.mesCapacitacion,
      numHoras: newUser.numHoras,
      nombreCurso: newUser.nombreCurso
    })
  }

  InsertUserS3(newUser: UserGDH) {
    this.cursosListS3.push({
      dni: newUser.dni,
      nombre: newUser.nombre,
      area: newUser.area,
      puesto: newUser.puesto,
      asistencia: newUser.asistencia,
      correo: newUser.correo,
      mesCapacitacion: newUser.mesCapacitacion,
      numHoras: newUser.numHoras,
      nombreCurso: newUser.nombreCurso
    })
  }

  InsertUserS4(newUser: UserGDH) {
    this.cursosListS4.push({
      dni: newUser.dni,
      nombre: newUser.nombre,
      area: newUser.area,
      puesto: newUser.puesto,
      asistencia: newUser.asistencia,
      correo: newUser.correo,
      mesCapacitacion: newUser.mesCapacitacion,
      numHoras: newUser.numHoras,
      nombreCurso: newUser.nombreCurso
    })
  }

  updateAsistenciaS1($key: string, flag: boolean) {
    this.cursosListS1.update($key, { asistencia: flag })
  }

  updateAsistenciaS2($key: string, flag: boolean) {
    this.cursosListS2.update($key, { asistencia: flag })
  }

  updateAsistenciaS3($key: string, flag: boolean) {
    this.cursosListS3.update($key, { asistencia: flag })
  }

  updateAsistenciaS4($key: string, flag: boolean) {
    this.cursosListS4.update($key, { asistencia: flag })
  }

}
