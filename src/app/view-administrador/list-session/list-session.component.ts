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

    this.coursesService.getSession1()
    .snapshotChanges()
    .subscribe( item => {
      this.session1List = [];
      item.forEach(element => {
        let y = element.payload.toJSON();
        y['$key'] = element.key;
        this.session1List.push(y);
      });
      console.log(this.session1List);
    })

    this.coursesService.getSession2()
    .snapshotChanges()
    .subscribe( item => {
      this.session2List = [];
      item.forEach(element => {
        let y = element.payload.toJSON();
        y['$key'] = element.key;
        this.session2List.push(y);
      });
      console.log(this.session2List);
    })

    this.coursesService.getSession3()
    .snapshotChanges()
    .subscribe( item => {
      this.session3List = [];
      item.forEach(element => {
        let y = element.payload.toJSON();
        y['$key'] = element.key;
        this.session3List.push(y);
      });
      console.log(this.session3List);
    })

    this.coursesService.getSession4()
    .snapshotChanges()
    .subscribe( item => {
      this.session4List = [];
      item.forEach(element => {
        let y = element.payload.toJSON();
        y['$key'] = element.key;
        this.session4List.push(y);
      });
      console.log(this.session4List);
    })
  }
  }


