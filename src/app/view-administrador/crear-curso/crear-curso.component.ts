import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.css', './../../view-user-home/view-user-home.component.css']
})
export class CrearCursoComponent implements OnInit {

  constructor() { }

  date
  ngOnInit() {
    
  }

  show() {
    console.log(this.date)
  }

}
