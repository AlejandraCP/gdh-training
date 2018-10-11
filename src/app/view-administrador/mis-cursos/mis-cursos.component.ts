import { Component, OnInit } from '@angular/core';
import { VerRegistroComponent } from './../ver-registro/ver-registro.component';

//models
import { CursoModel } from '../../models/cursos';

//services
import { MisCursosService } from '../../services/mis-cursos.service';


@Component({
  selector: 'app-mis-cursos',
  templateUrl: './mis-cursos.component.html',
  styleUrls: ['./mis-cursos.component.css']
})
export class MisCursosComponent implements OnInit {

  archivos: CursoModel[] = [];
  public months: any[];
  public years: any[];
  public days: any[];
  public selectedValue: any;
  public selectedValueYear: any;
  public currentMonth: any;
  public currentYear: any;
  public dayOfMonthArr: any[];
  cursosList: any[];
  horariosList: any[];
  arrayArray: any[];
  constructor( public misCursosService: MisCursosService) { }

  public showRegistro: boolean;
  
    ngOnInit() {
      this.showRegistro = false;

      const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"
      ];

      this.days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

      this.currentMonth = new Date().getMonth() + 1;
      if (this.currentMonth < 10) {
        this.currentMonth = '0' + this.currentMonth;
      }
      this.currentYear = new Date().getFullYear();
      this.currentYear = this.currentYear.toString();

      this.months = [
        { id: 1, month: monthNames[0], number: '01' },
        { id: 2, month: monthNames[1], number: '02' },
        { id: 3, month: monthNames[2], number: '03' },
        { id: 4, month: monthNames[3], number: '04' },
        { id: 5, month: monthNames[4], number: '05' },
        { id: 6, month: monthNames[5], number: '06' },
        { id: 7, month: monthNames[6], number: '07' },
        { id: 8, month: monthNames[7], number: '08' },
        { id: 9, month: monthNames[8], number: '09' },
        { id: 10, month: monthNames[9], number: '10' },
        { id: 11, month: monthNames[10], number: '11' },
        { id: 12, month: monthNames[11], number: '12' }
      ];
      
      this.years = [
        { id: 15, year: '2018' },
        { id: 16, year: '2019' },
        { id: 17, year: '2020' },
        { id: 18, year: '2021' }
      ]

      for (let index = 0; index < this.months.length; index++) {
        this.currentMonth = ''+this.currentMonth;
        if (this.currentMonth === this.months[index].number) {
          this.selectedValue = this.months[index]
        }

        for (let y = 0; y < this.years.length; y++) {
          if (this.currentYear === this.years[y].year) {
            this.selectedValueYear = this.years[y];
          }
        }
      }

      // this.selectedValue = this.months[0];
      var currentDate = '/' + this.currentMonth + '/' + this.currentYear

      this.years.forEach(element => {
        if (element.year === this.currentYear) {
        }
      });

      this.misCursosService.getCursos()
      .snapshotChanges()
      .subscribe(item => {   
        this.cursosList = [];
        item.forEach(elem => {
          let x = elem.payload.toJSON();
          x["$key"] = elem.key;
          let d = new Date(this.currentYear,10);
          let n = monthNames[d.getMonth()];
          
          this.cursosList.push(x);
        });
        
      });

      this.misCursosService.getCursos()
      .snapshotChanges()
      .subscribe(item => {
        this.cursosList = [];
        this.arrayArray = [];
        item.forEach(elem => {
          let x = elem.payload.toJSON();
          x['$key'] = elem.key;
          this.misCursosService.getHorarios(elem.key)
            .snapshotChanges()
            .subscribe(item1 => {
              this.horariosList = [];
              item1.forEach(e => {
                let y = e.payload.toJSON();
                y['$key'] = e.key;
                this.horariosList.push(y);
              });
              const result = this.horariosList.reduce(function(res, obj) {
                return (obj.sesionId < res.sesionId) ? obj : res;
              });
              console.log(result);
              
                            
              this.horariosList.forEach(element => {
                
                if (element['horario'].substring(3) === `${this.selectedValue.number}/${this.selectedValueYear.year.toString()}`) {
                  this.horariosList.push(element);
                  if (!this.horariosList.includes(x)) {
                    Object.keys(x['horario']).length;  
                    this.horariosList.push(x);
                  }
                }                
                
                // this.arrayArray.forEach(elem => {
                //   if (!this.monthArray.includes(elem['dates'])) {
                //     this.monthArray.push(elem['dates']);
                //   }
                // });                   
              })        
            });  
        });
      });


    }
  
    toggleRegistro() {
      this.showRegistro = !this.showRegistro;
    }

    crearCurso(){
      
    }

}
