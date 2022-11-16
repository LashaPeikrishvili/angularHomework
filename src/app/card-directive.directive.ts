import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCardDirective]'
})
export class CardDirectiveDirective {

  constructor(
    private _el: ElementRef
  ) {
    
   }

   @HostListener('mouseenter') onMouseEnter(){
    console.log("hover");
   this.hilight('green', 'yellow') 
   
   }

   @HostListener('mouseleave') onMouseLeave(){
    console.log("hover no");
    this.hilight('', '')
   }
   hilight(color:string, myColor:string){
    this._el.nativeElement.style.backgroundColor=color;
    this._el.nativeElement.style.color=myColor;
   }

}
