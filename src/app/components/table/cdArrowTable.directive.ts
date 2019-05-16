// import {
//   Directive,
//   ElementRef,
//   EventEmitter,
//   Input,
//   OnDestroy,
//   Output
// } from '@angular/core';
// import { Hotkey, HotkeysService } from 'angular2-hotkeys';

// declare var jQuery: any;

// // tslint:disable-next-line:directive-selector
// @Directive({
//   // tslint:disable-next-line:directive-selector
//   selector: '[cdArrowTable]',
//   providers: [HotkeysService],
//   exportAs: 'cdArrowTable'
// })
// // tslint:disable-next-line:class-name
// export class cdArrowTable implements OnDestroy {
//   constructor(
//     private _hotkeysService: HotkeysService,
//     public element: ElementRef
//   ) {
//     this.hotKeyConfig();
//   }
//   private _selectedIndex;
//   private _collection;
//   @Output() selectedIndexChange: EventEmitter<any> = new EventEmitter<any>();
//   // tslint:disable-next-line:no-output-on-prefix
//   @Output() onEnter: EventEmitter<any> = new EventEmitter<any>();

//   @Input() set collection(value: any) {
//     this._collection = value;
//     const newValue = (value || []).length;
//     this.selectedIndex > newValue - 1
//       ? (this.selectedIndex = newValue - 1)
//       : (this.selectedIndex = 0);
//   }

//   @Input() set selectedIndex(value: any) {
//     this._selectedIndex = value;
//   }

//   @Input() disabledKey;

//   ngOnDestroy() {
//     this.resetKeys();
//   }

//   resetKeys() {
//     const keys = Array.from(this._hotkeysService.hotkeys);
//     keys.map(key => {
//       this._hotkeysService.remove(key);
//     });
//   }

//   reInitKey(keys?) {
//     this._hotkeysService.add(keys || []);
//   }

//   getKeys() {
//     return Array.from(this._hotkeysService.hotkeys);
//   }

//   invokeScroll() {
//     const element = this.element.nativeElement.querySelectorAll('tbody')[this._selectedIndex];
//     const offset = 45;
//     const bodyRect = document.body.getBoundingClientRect().top;
//     const elementRect = element.getBoundingClientRect().top;
//     const elementPosition = elementRect - bodyRect;
//     const offsetPosition = elementPosition - offset;

//     window.scrollTo({
//       top: offsetPosition,
//       behavior: 'smooth'
//     });
//   }

//   hotKeyConfig() {
//     this._hotkeysService.add(
//       new Hotkey(
//         'shift+tab',
//         (event: KeyboardEvent): ExtendedKeyboardEvent => {
//           if (this._selectedIndex === 0 || this.disabledKey) {
//             return;
//           }
//           this._selectedIndex--;
//           this.selectedIndexChange.emit(this._selectedIndex);
//           this.invokeScroll();
//           const e: ExtendedKeyboardEvent = event;
//           e.returnValue = false;
//           return e;
//         },
//         undefined,
//         'Up'
//       )
//     );

//     this._hotkeysService.add(
//       new Hotkey(
//         'tab',
//         (event: KeyboardEvent): ExtendedKeyboardEvent => {
//           if (
//             this._collection.length === 0 ||
//             this._selectedIndex === this._collection.length - 1 ||
//             this.disabledKey
//           ) {
//             return;
//           }
//           this._selectedIndex++;
//           this.selectedIndexChange.emit(this._selectedIndex);
//           this.invokeScroll();
//           const e: ExtendedKeyboardEvent = event;
//           e.returnValue = false;
//           return e;
//         },
//         undefined,
//         'Down'
//       )
//     );

//     this._hotkeysService.add(
//       new Hotkey(
//         'enter',
//         (event: KeyboardEvent): boolean => {
//           if (this._selectedIndex >= 0) {
//             this.onEnter.emit(this._selectedIndex);
//             return false;
//           }
//         },
//         undefined,
//         'Select'
//       )
//     );
//   }
// }
