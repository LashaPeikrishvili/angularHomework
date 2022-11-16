import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[hide]'
})
export class hideCard{
    constructor(
        private _el2: ElementRef
      ) {
        
       }
    
       @HostListener('click', ['$event.target']) onClickHide(){
        this._el2.nativeElement.style.display = "none"
       }
    }
