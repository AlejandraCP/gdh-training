import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { TeacherModel } from './../models/teacher';

@Injectable()
export class CreateTeacherService {

  teacherList: AngularFireList<any>;
  newTeacher: TeacherModel = new TeacherModel();

  constructor(private firebase: AngularFireDatabase) { }

  getTeachers() {
    this.teacherList = this.firebase.list('expositor');
    return this.teacherList;
  }

  insertTeacher(teacherModel: TeacherModel) {
    this.teacherList.push({
      expositorId: teacherModel.expositorId,
      foto: teacherModel.foto,
      linkedIn: teacherModel.linkedIn,
      nombreExpositor: teacherModel.nombreExpositor,
      perfilExpositor: teacherModel.perfilExpositor
    })
  }

  deleteTeacher($key: string) {
    this.teacherList.remove($key);
  }

  // function works but not use.
  updateTeacher(teacherModel: TeacherModel) {
    this.teacherList.update(teacherModel.$key, {
      expositorId: teacherModel.expositorId,
      foto: teacherModel.foto,
      linkedIn: teacherModel.linkedIn,
      nombreExpositor: teacherModel.nombreExpositor,
      perfilExpositor: teacherModel.perfilExpositor

    });
  }

}
