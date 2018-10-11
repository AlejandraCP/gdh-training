import { Component, OnInit } from '@angular/core';
import { BoolSelectExpoService } from './../../services/bool-select-expo.service';

@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.css', './../../view-user-home/view-user-home.component.css']
})
export class CrearCursoComponent implements OnInit {
  public boolSelectList: any[];

  constructor( public boolSelectExpoService : BoolSelectExpoService) { }

  date
  ngOnInit() {
    this.boolSelectExpoService.getBoolSelect()
      .snapshotChanges()
      .subscribe(item => {
        this.boolSelectList = [];
        item.forEach(elem => {
          let x = elem.payload.toJSON();
          x['$key'] = elem.key;
          this.boolSelectList.push(x)
        })
        console.log(this.boolSelectList);
        
    });    
  }

  show() {
    console.log(this.date)
  }
  boxOption(key, create, option, select) {
    create = false;
    option = true;
    select = false;
    this.boolSelectExpoService.updateBoolAny(key,create, option, select)
  }

  boxCreate(key, create, option, select) {
    create = true;
    option = false;
    select = false;
    this.boolSelectExpoService.updateBoolAny(key,create, option, select)
  }

  boxSelect(key, create, option, select) {
    create = false;
    option = false;
    select = true;
    this.boolSelectExpoService.updateBoolAny(key,create, option, select)
  }
}
