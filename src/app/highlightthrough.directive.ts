import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightthrough]'
})
export class HighlightthroughDirective {
  

  constructor(private elem:ElementRef) { }

  @HostListener("click") onclick(){
    this.textDeco("line-through")
  }
  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("None")
  }
  private textDeco(action:string){
    this.elem.nativeElement.style.textDecoration=action;
  }

}
