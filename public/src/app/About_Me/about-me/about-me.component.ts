import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('select') select;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    // this.select.nativeElement.dataset.jarallaxElement = "0 -500";
  }

  ngOnDestroy(){

  }

}
