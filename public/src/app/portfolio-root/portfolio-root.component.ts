import { Component, OnInit, AfterViewInit, ViewChild, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-portfolio-root',
  templateUrl: './portfolio-root.component.html',
  styleUrls: ['./portfolio-root.component.scss']
})
export class PortfolioRootComponent implements OnInit {
  @ViewChild('myModal') modal;
  @ViewChild('modalImg') modalImg;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
  }

  imgOnClick($event) {
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    this.modal.nativeElement.style.display = "block";
    this.modalImg.nativeElement.src = $event.src;
    this.document.body.style.overflow = "hidden";
  }

  closeModal(){
    this.modal.nativeElement.style.display = "none";
    this.document.body.style.overflow = "auto";
  }
}
