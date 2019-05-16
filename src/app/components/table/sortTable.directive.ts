// import {
//   Directive,
//   ElementRef,
//   EventEmitter,
//   HostListener,
//   Input,
//   OnInit,
//   Output
// } from '@angular/core';

// // tslint:disable-next-line:directive-selector
// @Directive({ selector: '[sortColumn]' })
// export class SortColumnDirective implements OnInit {
//   constructor(private el: ElementRef) { }
//   public header;
//   public _sortParam;
//   private sort;
//   // tslint:disable-next-line:no-input-rename
//   @Input('sortColumn') sortKey;
//   @Input('sortParam') set sortParam(value) {
//     this._sortParam = value;
//     if (this.header) {
//       this.render();
//     }
//   }

//   @Output() sortFn: EventEmitter<any> = new EventEmitter<any>();
//   @Output() sortParamChange: EventEmitter<any> = new EventEmitter<any>();


//   ngOnInit() {
//     this.header = this.el.nativeElement.innerText;
//     this.render();
//   }

//   @HostListener('click') onClick() {
//     if (this._sortParam.order && this._sortParam.order.indexOf(this.sortKey) !== -1) {
//       this.sort = !this.sort;
//     }

//     this._sortParam = {
//       order: (this.sort) ? this.sortKey : '-' + this.sortKey,
//       // sort: this.sort ? 1 : -1
//     };

//     this.render();

//     this.sortParamChange.emit(this._sortParam);
//     this.sortFn.emit(this._sortParam);
//   }

//   render() {
//     if (this._sortParam.order && this._sortParam.order.indexOf(this.sortKey) !== -1) {
//       this.sort
//         ? (this.el.nativeElement.innerHTML =
//           '<i class="fas fa-sort-up mr-3"></i>&nbsp;' + this.header)
//         : (this.el.nativeElement.innerHTML =
//           '<i class="fas fa-sort-down  mr-3"></i>&nbsp;' + this.header);
//     } else {
//       this.el.nativeElement.innerHTML =
//         '<i class="fas fa-sort  mr-3"></i>&nbsp;' + this.header;
//     }
//   }
// }
