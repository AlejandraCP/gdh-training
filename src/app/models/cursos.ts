// export class CursoModel {
//     public $key: string;
//     public cursoId: number;
//     public descripcionCurso: string;
//     public expositor_Id: number;
//     public horario: [any];
//     public imgCursoArchivo: File;
//     public imgUrl: string;
//     public lugar: string;
//     public manualArchivo: File;
//     public nombreManual: string;
//     public urlManual: string;
//     public nombreCertificado: string;
//     public nombreCurso: string;
//     public numSesiones: number;
//     public objetivos: string;
//     public silabusArchivo: File;
//     public nombreSilabus: string;
//     public urlSilabus: string;
//     public tipoCurso_Id: number;
//     public totalHoras: number;
//     public totalVacantes: number;

//     constructor( imgCursoArchivo: File, manualArchivo: File, silabusArchivo: File){
//         this.imgCursoArchivo = imgCursoArchivo;
//         this.manualArchivo = manualArchivo;
//         this.silabusArchivo = silabusArchivo;
//     }

// }
export class CursoModel {
    public $key: string;
    public cursoId: number;
    public descripcionCurso: string;
    public expositor_Id: number;
    public horario: [any];
    public imgCursoArchivo: string;
    public imgUrl: string;
    public lugar: string;
    public manualArchivo: string;
    public nombreManual: string;
    public urlManual: string;
    public nombreCertificado: string;
    public nombreCurso: string;
    public numSesiones: number;
    public objetivos: string;
    public silabusArchivo: string;
    public nombreSilabus: string;
    public urlSilabus: string;
    public tipoCurso_Id: number;
    public totalHoras: number;
    public totalVacantes: number;

}
