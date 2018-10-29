import { Component, OnInit, AfterViewInit, ViewChild, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Skills1Component } from './skills1/skills1.component';
import { ResumeService } from './resume.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('myModal') modal;
  @ViewChild('modalImg') modalImg;

  private form: any = {};
  isActive1 = true; isActive2 = false; isActive3 = false; isActive4 = false;
  pdfSrc: string = 'assets/Resume.pdf';
  resumeSrc: string = 'https://github.com/zariman/resume/blob/master/Resume.pdf';

  constructor(@Inject(DOCUMENT) private document: Document, private _route: Router, private _service: ResumeService) { }

  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }
  reset(url: string) {
    this._route.navigate([url]);
  }

  resumeOnClick() {
    window.open(this.resumeSrc);
  }

  submitForm(){
    this._service.sendEmail(this.form, data => {
      this.form = {};
    })
  }

  onRouterOutletActivate(event: any){
    if(event.constructor.name == "Skills1Component") {
      this.isActive1 = true;
      this.isActive2 = false;
      this.isActive3 = false;
      this.isActive4 = false;
    }
    else if(event.constructor.name == "Skills2Component"){
      this.isActive1 = false;
      this.isActive2 = true;
      this.isActive3 = false;
      this.isActive4 = false;
    }
    else if(event.constructor.name == "Skills3Component"){
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
    console.log(event.constructor.name);
  }
}
