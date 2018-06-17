import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import module
import { ElModule } from 'element-angular';
import { NgZorroAntdModule } from 'ng-zorro-antd';
// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ElectronService } from './providers/electron.service';
import { WebviewDirective } from './directives/webview.directive';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { DepartmentComponent } from './department/department.component';
import { CourseComponent } from './course/course.component';
import { StudenteditComponent } from './student/studentedit/studentedit.component';
import {StudentService} from './shared/student.service';
import { StudentFilterPipe } from './student/student-filter.pipe';
import { RoleComponent } from './role/role.component';
import {RoleService} from "./shared/role.service";
import { RoleeditComponent } from './role/roleedit/roleedit.component';
import { UsermessageComponent } from './usermessage/usermessage.component';
import { UsereditComponent } from './usermessage/useredit/useredit.component';
import {UserService} from "./shared/user.service";
import {LocalstorageService} from "./services/localstorage.service";
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';
import {TeacherService} from "./shared/teacher.service";
import { UserPipe } from './usermessage/user.pipe';
import { RolePipe } from './role/role.pipe';
import { Test1Component } from './test1/test1.component';
import {KeyService} from "./shared/key.service";
import {TestService} from "./shared/test.service";
import {TeachingarrangeService} from "./shared/teachingarrange.service";
import {TeachingarrangeComponent} from "./teachingarrange/teachingarrange.component";
import {TeachingeditComponent} from "./teachingarrange/teachingedit/teachingedit.component";
import {HttpModule} from "@angular/http";
import {HttpRequest} from "@angular/common/http";
import {HttpRequestService} from "./services/http-request.service";
import {ServiceBaseService} from "./services/service-base.service";
import {GetServiceService} from "./services/get-service.service";
import { TeacherFilterPipe } from './teacher/teacher-filter.pipe';
import { TeachereditComponent } from './teacher/teacheredit/teacheredit.component';
import { Code404Component } from './code404/code404.component';
import { ParameterComponent } from './parameter/parameter.component';
import { HistoryrecordComponent } from './historyrecord/historyrecord.component';
import { RankinglistComponent } from './rankinglist/rankinglist.component';
import { AskforleaveComponent } from './askforleave/askforleave.component';
import {PermissionComponent} from "./permission/permission.component";
import {PathLocationStrategy, LocationStrategy, HashLocationStrategy} from "@angular/common";


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WebviewDirective,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    SidebarComponent,
    ContentComponent,
    StudentComponent,
    TeacherComponent,
    DepartmentComponent,
    CourseComponent,
    StudenteditComponent,
    StudentFilterPipe,
    RoleComponent,
    RoleeditComponent,
    UsermessageComponent,
    UsereditComponent,
    LoginComponent,
    TestComponent,
    UserPipe,
    RolePipe,
    Test1Component,
    TeachingarrangeComponent,
    TeachingeditComponent,
    TeacherFilterPipe,
    TeachereditComponent,
    Code404Component,
    ParameterComponent,
    HistoryrecordComponent,
    RankinglistComponent,
    AskforleaveComponent,
    PermissionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ElModule.forRoot(),
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgZorroAntdModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    })
  ],
  providers: [ElectronService, StudentService,RoleService,UserService,LocalstorageService,TeacherService,KeyService,TeachingarrangeService,TestService
    ,HttpRequestService,GetServiceService,ServiceBaseService,{provide:LocationStrategy,useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
