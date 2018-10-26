/* 
*  Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. 
*  See LICENSE in the source repository root for complete license information. 
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//components
import { AppComponent } from './app.component';
import { ViewUserHomeComponent } from './view-user-home/view-user-home.component';
import { LoginComponent } from './login/login.component';
import { LoginFbComponent } from './login-fb/login-fb.component';
import { ViewLoginComponent } from './view-login/view-login.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { ViewAdministradorComponent } from './view-administrador/view-administrador.component';
import { CrearCursoComponent } from './view-administrador/crear-curso/crear-curso.component';
import { MisCursosComponent } from './view-administrador/mis-cursos/mis-cursos.component';

import { HttpService } from './shared/http.service';
import { AuthService } from './auth/auth.service';
import { HomeService } from './home/home.service';
import { AuthFirebaseService } from './services/auth-firebase.service';
import { UserService } from './services/user.service';
import { SharingDataService } from './services/sharing-data.service';
import { AuthAdminService } from './services/auth-admin.service';
import { BoolSelectExpoService } from './services/bool-select-expo.service';
import { CreateTeacherService } from './services/create-teacher.service';
import { CountersService } from './services/counters.service';
import { CoursesService } from './services/courses.service';

import { MisCursosService } from './services/mis-cursos.service';
import { InscripcionesService } from './services/inscripciones.service';

// import angular firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';

// enviroment - config firebase
import { environment } from '../environments/environment';

// guard
import { AuthGuard } from './guards/auth.guard';
import { SidebarDirective } from './directives/sidebar.directive';
import { UploadXlsComponent } from './view-administrador/upload-xls/upload-xls.component';
import { ListXlsComponent } from './view-administrador/list-all/list-xls.component';
import { VerRegistroComponent } from './view-administrador/ver-registro/ver-registro.component';
import { CoursesCoorComponent } from './courses-coor/courses-coor.component';
import { ListSessionComponent } from './view-administrador/list-session/list-session.component';


const routes: Routes = [
  { path: 'login', component: LoginAdminComponent },
  { path: '', component: ViewLoginComponent },
  { path: 'home', component: ViewUserHomeComponent },
  // { path: 'login', component: LoginFbComponent },
  { path: 'administrador', component: ViewAdministradorComponent, canActivate: [AuthGuard] },
  { path: 'registros/:id/:pag', component: VerRegistroComponent, canActivate: [AuthGuard] },
  { path: 'coor', component: CoursesCoorComponent, canActivate: [AuthGuard]},
  { path: '**', component: NotFoundPageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewLoginComponent,
    LoginFbComponent,
    ViewAdministradorComponent,
    NotFoundPageComponent,
    LoginAdminComponent,
    LoginAdminComponent,
    ViewAdministradorComponent,
    CrearCursoComponent,
    MisCursosComponent,
    SidebarDirective,
    ViewUserHomeComponent,
    VerRegistroComponent,
    CoursesCoorComponent,
    UploadXlsComponent,
    ListXlsComponent,
    ListSessionComponent,
    ListSessionComponent
  ],
  imports: [
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true}),
    NgbModule.forRoot()
  ],
  providers: [
    HttpService,
    AuthService,
    AuthGuard,
    AuthAdminService,
    HomeService,
    AuthFirebaseService,
    UserService,
    SharingDataService,
    BoolSelectExpoService, 
    CreateTeacherService,
    CountersService,
    MisCursosService,
    CoursesService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
