import { Component, OnInit } from '@angular/core';
import { CoursesService } from "../../services/courses.service";

@Component({
  selector: 'app-list-session',
  templateUrl: './list-session.component.html',
  styleUrls: ['./list-session.component.css']
})
export class ListSessionComponent implements OnInit {
  session1List: any[];
  session2List: any[];
  session3List: any[];
  session4List: any[];
  constructor(public coursesService: CoursesService) { }

  ngOnInit() {

    this.coursesService.getGroup('sesion1')
    .snapshotChanges()
    .subscribe( item => {
      this.session1List = [];
      item.forEach(element => {
        let y = element.payload.toJSON();
        y['$key'] = element.key;
        this.session1List.push(y);
      });
    })

    this.coursesService.getGroup('sesion2')
    .snapshotChanges()
    .subscribe( item => {
      this.session2List = [];
      item.forEach(element => {
        let y = element.payload.toJSON();
        y['$key'] = element.key;
        this.session2List.push(y);
      });
    })

    this.coursesService.getGroup('sesion3')
    .snapshotChanges()
    .subscribe( item => {
      this.session3List = [];
      item.forEach(element => {
        let y = element.payload.toJSON();
        y['$key'] = element.key;
        this.session3List.push(y);
      });
    })

    this.coursesService.getGroup('sesion4')
    .snapshotChanges()
    .subscribe( item => {
      this.session4List = [];
      item.forEach(element => {
        let y = element.payload.toJSON();
        y['$key'] = element.key;
        this.session4List.push(y);
      });
    })
  }
  }


