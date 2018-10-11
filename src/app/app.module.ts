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

import { AppComponent } from './app.component';
import { ViewUserHomeComponent } from './view-user-home/view-user-home.component';
import { LoginComponent } from './login/login.component';
import { LoginFbComponent } from './login-fb/login-fb.component';
import { ViewCoorComponent } from './view-coor/view-coor.component';
import { ViewAdminComponent } from './view-admin/view-admin.component';
import { ViewLoginComponent } from './view-login/view-login.component';
import { ViewDevComponent } from './view-dev/view-dev.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { ViewAdministradorComponent } from './view-administrador/view-administrador.component';
import { CrearCursoComponent } from './view-administrador/crear-curso/crear-curso.component';
import { MisCursosComponent } from './view-administrador/mis-cursos/mis-cursos.component';


import { HttpService } from './shared/http.service';
import { AuthService } from './auth/auth.service';
import { HomeService } from './home/home.service';
import { TurnosService } from './services/turnos.service';
import { ReportService } from './services/report.service';
import { Report2Service } from './services/report2.service';
import { InscriptionService } from './services/inscription.service';
import { AuthFirebaseService } from './services/auth-firebase.service';
import { UserService } from './services/user.service';
import { SharingDataService } from './services/sharing-data.service';
import { TurnsStateService } from './services/turns-state.service';
import { AuthAdminService } from './services/auth-admin.service';
import { BoolSelectExpoService } from './services/bool-select-expo.service';
import { CreateTeacherService } from './services/create-teacher.service';
import { CountersService } from './services/counters.service';



import { MisCursosService } from './services/mis-cursos.service';

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
import { VerRegistroComponent } from './view-administrador/ver-registro/ver-registro.component';


const routes: Routes = [
  { path: 'login', component: LoginAdminComponent },
  { path: '', component: ViewLoginComponent },
  { path: 'home', component: ViewUserHomeComponent },
  { path: 'login', component: LoginFbComponent },
  { path: 'coordi', component: ViewCoorComponent, canActivate: [AuthGuard] },
  { path: 'administrador', component: ViewAdministradorComponent, canActivate: [AuthGuard] },
  { path: 'dev', component: ViewDevComponent, canActivate: [AuthGuard]},
  {path: '**', component: NotFoundPageComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewLoginComponent,
    LoginFbComponent,
    ViewCoorComponent,
    ViewAdminComponent,
    ViewAdministradorComponent,
    NotFoundPageComponent,
    ViewDevComponent,
    LoginAdminComponent,
    LoginAdminComponent,
    ViewAdministradorComponent,
    CrearCursoComponent,
    MisCursosComponent,
    SidebarDirective,
    ViewUserHomeComponent,
    VerRegistroComponent
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
    InscriptionService,
    TurnosService,
    ReportService,
    Report2Service,
    InscriptionService,
    AuthFirebaseService,
    UserService,
    SharingDataService,
    TurnsStateService,
    BoolSelectExpoService, 
    CreateTeacherService,
    CountersService,
    MisCursosService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
