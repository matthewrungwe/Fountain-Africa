import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DashboardModule } from './dashboard/dashboard.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragScrollModule } from 'ngx-drag-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ClassesComponent } from './classes/classes.component'
import { WelcomeComponent } from './welcome/welcome.component';
import { DialogComponent } from './classes/dialog/dialog.component';
import { SubjectsComponent } from './classes/subjects/subjects.component';
import { PractiseComponent } from './classes/practise/practise.component';
import { ClassComponent } from './classes/subjects/class/class.component';
import { VideoComponent } from './classes/dialog/video/video.component';
import { QuestionsComponent } from './classes/dialog/questions/questions.component';
import { SubjectComponent } from './classes/dialog/subject/subject.component'
import { LibraryComponent } from './library/library.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    ClassesComponent,
    WelcomeComponent,
    DialogComponent,
    SubjectsComponent,
    PractiseComponent,
    ClassComponent,
    VideoComponent,
    QuestionsComponent,
    SubjectComponent,
    LibraryComponent,
    AboutComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DashboardModule,
    NgxPaginationModule,
    NgbModule,
    DragScrollModule
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
