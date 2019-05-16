import { OnInit } from '@angular/core';
import {
  Directive,
  AfterViewInit,
  HostBinding,
  Input,
  ElementRef
} from '@angular/core';

@Directive({
  selector: '[lazyLoad]'
})
export class LazyLoadDirective implements AfterViewInit, OnInit {
  @HostBinding('attr.src') srcAttr = null;
  private _imgSrc;
  @Input() set srcImage(img) {
    this._imgSrc = img ? img : null;
  }

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    this.el.nativeElement.classList.add('lazyload-img');      
  }

  ngAfterViewInit() {
    this.canLazyLoad() ? this.loadLazyImage() : this.loadImage();
  }

  canLazyLoad() {
    return window && 'IntersectionObserver' in window;
  }

  loadImage() {
    const img = new Image();
    img.src = this._imgSrc;
    img.onload = () => {
      this.srcAttr = this._imgSrc;
      this.el.nativeElement.classList.add('loaded');
    };
  }

  loadLazyImage() {
    const ost = new IntersectionObserver(entries => {
      entries.forEach(({ isIntersecting }) => {
        if (isIntersecting) {
          this.loadImage();
          ost.unobserve(this.el.nativeElement);
        }
      });
    });
    ost.observe(this.el.nativeElement);
  }
}
