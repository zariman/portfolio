import { Component, OnInit, AfterViewInit, ViewChild, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Skills1Component } from './skills/skills1/skills1.component';
import { ResumeService } from './resume.service';
import { Skills2Component } from './skills/skills2/skills2.component';
import { Skills3Component } from './skills/skills3/skills3.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('myModal') modal;
  @ViewChild('modalImg') modalImg;

  form: any = {};
  isSubmitted = false;
  isActive1 = true; isActive2 = false; isActive3 = false; isActive4 = false;
  pdfSrc: string = 'assets/Resume.pdf';
  resumeSrc: string = 'https://github.com/zariman/resume/blob/master/Resume.pdf';

  constructor(@Inject(DOCUMENT) private document: Document, private _route: Router, private _service: ResumeService) { 
  }

  scrollToElement($element): void {
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
  reset(url: string) {
    this._route.navigate([url]);
  }

  resumeOnClick() {
    window.open(this.resumeSrc);
  }

  submitForm(){
    this.isSubmitted = true;
    this._service.sendEmail(this.form, data => {
      this.form = {};
      this.isSubmitted = false;
    })
  }

  onRouterOutletActivate(event: any){
    if(event instanceof Skills1Component) {
      this.isActive1 = true;
      this.isActive2 = false;
      this.isActive3 = false;
      this.isActive4 = false;
    }
    else if(event instanceof Skills2Component){
      this.isActive1 = false;
      this.isActive2 = true;
      this.isActive3 = false;
      this.isActive4 = false;
    }
    else if(event instanceof Skills3Component){
      this.isActive1 = false;
      this.isActive2 = false;
      this.isActive3 = true;
      this.isActive4 = false;
    }
    else{
      this.isActive1 = false;
      this.isActive2 = false;
      this.isActive3 = false;
      this.isActive4 = true;
    }
    console.log(typeof event);
  }
}
