import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSidebar]'
})
export class SidebarDirective {

  constructor( 
    public render: Renderer2,
    public el: ElementRef
    ) { }

}
