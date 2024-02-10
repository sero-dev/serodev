import { Directive, ElementRef, OnInit, inject } from '@angular/core';

@Directive({
  selector: '[webPage]',
  standalone: true,
})
export class PageDirective implements OnInit {
  private elementRef = inject(ElementRef);

  ngOnInit() {
    (this.elementRef.nativeElement as HTMLElement).classList.add('h-page');
  }
}
