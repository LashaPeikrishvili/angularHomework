import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[borderDirective]'
  })
  export class borderDirective1 {
  
    constructor(
      private _el1: ElementRef
    ) {
      
     }
  
     @HostListener('mouseenter') onMouseEnter(){
      console.log("hover");
      this._el1.nativeElement.style.border = "5px solid red"
     }
  
     @HostListener('mouseleave') onMouseLeave(){
      console.log("hover no");
      this._el1.nativeElement.style.border = "none"
     }
     
  }
  