import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss']
})
export class SkeletonComponent implements OnInit {

  constructor() { }
  public _rows = [];
  @Input('textRow') rows = 2;
  ngOnInit() {
    this._rows = Array.from(Array(2).keys());
  }

}
