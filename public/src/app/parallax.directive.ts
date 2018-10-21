import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {

  @Input('ratio') parallaxRatio : number = 1;
  initialTop: number = 0;

  constructor(private eleRef: ElementRef) {
    this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top;
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event){
    let offset = window.pageYOffset;
    this.eleRef.nativeElement.style.backgroundPositionY = this.initialTop + (offset * this.parallaxRatio) + "px";
    console.log(this.initialTop, this.eleRef.nativeElement.style.backgroundPositionY);
  }

}
