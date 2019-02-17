import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  constructor() { 
    this.componentData['html'] = `
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
    `
  }
  public dropdown = {};  
  public componentData = {};  
  ngOnInit() {
    
  }

}
