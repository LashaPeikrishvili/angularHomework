import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[show]'
})
export class showCard{
    constructor(
        private _el3: ElementRef
      ) {
        
       }
    
       @HostListener('click', ['$event.target']) onClickHide(){
        this._el3.nativeElement.style.display = "block"
       }
    }
