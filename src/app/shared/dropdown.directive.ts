import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;
    
    //constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

    @HostListener('click') toggleOpen(eventData: Event) {
        this.isOpen = !this.isOpen;
        /*
        if(this.isOpen) {
            this.renderer.addClass(this.elementRef.nativeElement, "open");
            this.isOpen = false;
        } else {
            this.renderer.removeClass(this.elementRef.nativeElement, "open");
            this.isOpen = true;
        }
        */
    }
}