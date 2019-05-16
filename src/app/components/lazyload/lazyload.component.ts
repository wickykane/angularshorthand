import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazyload',
  templateUrl: './lazyload.component.html',
  styleUrls: ['./lazyload.component.scss']
})
export class LazyloadComponent implements OnInit {

  constructor() { }
  public _imgList = Array.from(Array(20).keys());
  ngOnInit() {
  }

}
