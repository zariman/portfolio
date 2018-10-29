import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatCardModule } from '@angular/material';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './About_Me/about-me/about-me.component';
import { AboutMe2Component } from './About_Me/about-me2/about-me2.component';
import { PortfolioRootComponent } from './portfolio-root/portfolio-root.component';
import { ZoomModule } from 'angular-zoom';
import { Skills1Component } from './skills1/skills1.component';
import { Skills2Component } from './skills2/skills2.component';
import {MatTabsModule} from '@angular/material/tabs';
import { Skills3Component } from './skills3/skills3.component';
import { OthersComponent } from './others/others.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FormsModule } from '@angular/forms';
import { Skills4Component } from './skills4/skills4.component';
import { HttpClientModule } from '@angular/common/http';
import { ResumeService } from './resume.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    AboutMe2Component,
    PortfolioRootComponent,
    Skills1Component,
    Skills2Component,
    Skills3Component,
    OthersComponent,
    Skills4Component,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatCheckboxModule,
    MDBBootstrapModule.forRoot(),
    PdfViewerModule,
    ZoomModule
  ],
  providers: [ResumeService],
  bootstrap: [AppComponent]
})
export class AppModule { }