import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';

import { fromEvent } from 'rxjs';

@Component({
  selector: 'fixed-table',
  styles: [
    `
.header-fixed-table-component {
    position: relative;
    max-width: 100%;
    overflow: hidden;
}

.fixed {
    width: 100%;
    display: block;
    max-width: 100%;
    border: none;
}


.scroll-container {
  max-height: 200px;
  overflow: auto;
}

table {
    margin-bottom: 0;
  }
  `
  ],
  template: `
        <div class="header-fixed-table-component">
            <table #cloneTable [class]="classList + ' fixed'" >
              <ng-container [ngTemplateOutlet]="theadRef"></ng-container>
            </table>
            <div #scrollContainer [class]="containerClass">
                <table #originTable [class]="classList">
                  <ng-container  [ngTemplateOutlet]="theadRef"></ng-container>
                  <ng-content select="tbody"></ng-content>
                </table>
            </div>
            <div>
          </div>
        </div>
`
})
export class FixedTableComponent
  implements OnInit, OnDestroy, AfterViewInit {
  @Input('class') classList;
  @Input('containerClass') containerClass = 'table-responsive list';

  @Input()
  set collection(value) {
    if (value) {
      // this.refresh();
      setTimeout(() => this.refresh());
    }
  }

  @ViewChild('cloneTable') cloneTable;
  @ViewChild('originTable') originTable;
  @ViewChild('scrollContainer') scrollContainer;

  @ContentChild('headerRef') theadRef;

  $resize;
  $scroll;

  constructor(private cdRef: ChangeDetectorRef, private element: ElementRef) {}
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.element.nativeElement.parentNode.classList.remove('table-responsive', 'list');
    this.element.nativeElement.classList = 'table-order';

    this.$resize = fromEvent(window, 'resize').subscribe(() => {
      this.refresh();
    });

    this.$scroll = fromEvent(
      this.scrollContainer.nativeElement,
      'scroll'
    ).subscribe((e: any) => {
      this.cloneTable.nativeElement.style.transform = `translateX(-${e.target
        .scrollLeft}px)`;
      // this.refresh();
    });

    this.refresh();
  }

  setHeight() {
    // Remove Origin thead
    // const thead = this.originTable.nativeElement.querySelector('thead');
    // if (thead) {
    //   thead.style.visibility = 'collapse';
    //   this.originTable.nativeElement.querySelectorAll('thead th').forEach(element => {
    //     element.style.padding = 0;
    //     element.style.border = 0;
    //     element.style.fontSize = 0;
    //   });
    // }

    const height = this.cloneTable.nativeElement.offsetHeight;
    this.originTable.nativeElement.style.transform = `translateY(-${height}px)`;
  }

  ngOnDestroy(): void {
    this.$resize.unsubscribe();
    this.$scroll.unsubscribe();
  }

  refresh() {
    const [th, clone] = [
      this.originTable.nativeElement.querySelectorAll('thead th'),
      this.cloneTable.nativeElement.querySelectorAll('thead th')
    ];

    const scrollWidth =
      this.scrollContainer.nativeElement.offsetWidth -
      this.scrollContainer.nativeElement.clientWidth;

    th.forEach((element, index) => {
      const width =
        scrollWidth > 0 && index === th.length - 1
          ? scrollWidth + element.getBoundingClientRect().width
          : element.getBoundingClientRect().width;

      clone[index].style.width = `${width}px`;
      clone[index].style.minWidth = `${width}px`;
      clone[index].style.maxWidth = `${width}px`;
    });

    this.setHeight();
    this.cdRef.markForCheck();
  }
}
