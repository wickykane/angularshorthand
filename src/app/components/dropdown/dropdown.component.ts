import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var  Rainbow: any;


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit, AfterViewInit {

  constructor() {
    this.componentData.html = `
    <div class="dropdown-group">
        <div class="dropdown-label">
            <button class="btn btn-outline-primary">
                    {{ dropdown['value'] || "Button"}}
                    <span>
                            <i class="fas fa-caret-down"></i>
                    </span>
            </button>
        </div>
    </div>
    `;
  }
  public dropdown = {};
  public componentData: any = {};
  ngOnInit() {
  }

  ngAfterViewInit(): void {
    Rainbow.color();
  }
}
