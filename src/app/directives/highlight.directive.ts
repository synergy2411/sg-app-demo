import { Directive, ElementRef, HostBinding, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
    selector : '[appHighlight]'
})
export class HighlightDirective{

    @Input("defaultColor") defaultColor : any;
    @HostBinding("style.background-color") bgColor : any;

    @HostListener('mouseover') 
    onmouseover(){
        this.bgColor = this.defaultColor;
    }

    @HostListener('mouseleave')
    onmouseleave(){
        this.bgColor = "transparent";
    }

    constructor(private elementRef : ElementRef, private renderer : Renderer2){
        
        // console.log(this.elementRef.nativeElement);
        // this.elementRef.nativeElement.style.backgroundColor = "darkgrey";
    }

}