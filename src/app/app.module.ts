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
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { ViewAdministradorComponent } from './view-administrador/view-administrador.component';
import { ListXlsComponent } from './view-administrador/list-all/list-xls.component';
import { CoursesCoorComponent } from './courses-coor/courses-coor.component';
import { ListSessionComponent } from './view-administrador/list-session/list-session.component';
import { ViewDevComponent } from './view-dev/view-dev.component';

//services
import { AuthAdminService } from './services/auth-admin.service';
import { CoursesService } from './services/courses.service';


// import angular firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// enviroment - config firebase
import { environment } from '../environments/environment';

// guard
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: '', component: LoginAdminComponent },
  { path: 'administrador', component: ViewAdministradorComponent, canActivate: [AuthGuard] },
  { path: 'coor', component: CoursesCoorComponent, canActivate: [AuthGuard]},
  { path: 'dev', component: ViewDevComponent, canActivate: [AuthGuard]},
  { path: '**', component: NotFoundPageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ViewAdministradorComponent,
    NotFoundPageComponent,
    LoginAdminComponent,
    ViewAdministradorComponent,
    CoursesCoorComponent,
    ListXlsComponent,
    ListSessionComponent,
    ViewDevComponent
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
    AuthGuard,
    AuthAdminService,
    CoursesService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
