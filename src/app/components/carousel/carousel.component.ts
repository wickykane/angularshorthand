import {
  Component,
  ContentChildren,
  QueryList,
  AfterViewInit,
  Input,
  ViewChildren,
  ElementRef,
  ViewChild
} from '@angular/core';
import { CarouselItemDirective } from './carouselItem.directive';
import {
  AnimationBuilder,
  animate,
  style,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit {
  constructor(private builder: AnimationBuilder) {}
  private _presentation;
  private _viewItems: QueryList<ElementRef>;
  private buffer = 2;
  private timing = '500ms ease-in-out';
  public currentIndex = 0;
  private total_Element;
  private _itemWidth;

  @Input() itemPerPage = 1;

  @ViewChild('carouselInner') carouselInnerElement: ElementRef;
  @ContentChildren(CarouselItemDirective) items: QueryList<
    CarouselItemDirective
  >;

  @ViewChildren('carouselChild') set viewItems(data: QueryList<ElementRef>) {
    if (data && data.length > 0) {
      this._viewItems = data;
      this.setWidthItem();
      this._itemWidth = this._viewItems.first.nativeElement.getBoundingClientRect().width;
    }
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.itemPerPage = Math.min(this.items.length, this.itemPerPage);
    this.total_Element = this.itemPerPage + this.buffer;
    this._presentation = Array.from(Array(this.total_Element).keys()).map(
      item => (item + this.currentIndex) % this.items.length
    );
    this.currentIndex = this._presentation[Math.floor(this.total_Element / 2)];
  }

  setWidthItem() {
    const widthPercent = 100 / this.itemPerPage;
    this._viewItems.forEach(item => {
      item.nativeElement.style.flex = `0 0 ${widthPercent}%`;
    });
  }

  next() {
    this._presentation = this._presentation.map(
      item => (item + 1) % this.items.length
    );
    this.currentIndex = this._presentation[Math.floor(this.total_Element / 2)];
    this.animation(this._itemWidth);
  }

  prev() {
    this._presentation = this._presentation.map(
      item => (item - 1 + this.items.length) % this.items.length
    );
    this.currentIndex = this._presentation[Math.floor(this.total_Element / 2)];
    this.animation(-this._itemWidth);
  }

  animation(offset) {
    const myAnimation = this.builder.build([
      animate(
        this.timing,
        keyframes([
          style({ transform: `translateX(${offset}px)`}),
          style({ transform: `translateX(${0}px)`})
        ])
      )
    ]);
    const player = myAnimation.create(this.carouselInnerElement.nativeElement);
    player.play();
  }
}
