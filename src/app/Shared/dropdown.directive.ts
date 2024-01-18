import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.show') isShow = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') toggleOpen() {
    this.isShow = !this.isShow;
    console.log(this.isShow);
    if (this.isShow) {
      this.renderer.addClass(
        this.elementRef.nativeElement.querySelector('.dropdown-menu'),
        'show'
      );
    } else {
      this.renderer.removeClass(
        this.elementRef.nativeElement.querySelector('.dropdown-menu'),
        'show'
      );
    }
  }
}
