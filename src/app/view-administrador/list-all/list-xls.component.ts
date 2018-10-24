import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-xls',
  templateUrl: './list-xls.component.html',
  styleUrls: ['./list-xls.component.css']
})
export class ListXlsComponent implements OnInit {
  public showRegistro: boolean;
  
  constructor() { }

  
    ngOnInit() {
      this.showRegistro = true;
    }
  
    toggleRegistro() {
      this.showRegistro = !this.showRegistro;
    }

}
