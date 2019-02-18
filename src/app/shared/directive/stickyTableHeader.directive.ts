import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnInit,
  HostListener
} from "@angular/core";
declare var jQuery: any;

@Directive({ selector: "[appTableFixHeader]" })
export class FixHeaderTableDirective implements OnInit, AfterViewInit {
  constructor(private element: ElementRef) {}
  ngOnInit(): void {}

  @HostListener("window:resize")
  onTableResize() {
    this.ngAfterViewInit();
  }

  ngAfterViewInit() {
    const table = jQuery(this.element.nativeElement);
    //Init Scrollbar
    table.find("tbody").scrollbar();

    const th = table.find("thead th");
    const td = table.find("tbody tr:first-child td");
    const tableWidth = table.find("tbody").width();
    const bodyWidth = table.find("tbody tr").width();
    if (th && td) {
      td.each(function(index, ele) {
        th.eq(index).css("width", jQuery(ele).outerWidth());
      });
    }
    // Check if have scrollbar
    if (tableWidth != bodyWidth) {
      const scrollWidth = tableWidth - bodyWidth;
      th.last().css("width", scrollWidth + th.last().outerWidth());
    }
  }
}
