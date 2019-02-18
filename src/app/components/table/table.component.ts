import { Component, OnInit, AfterViewInit } from "@angular/core";
declare var Rainbow: any;

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"]
})
export class TableComponent implements OnInit, AfterViewInit {
  public componentData: any = {};
  constructor() {
    this.componentData.html = `
    <div class="table-responsive">
      <table appTableFixHeader class="table table-striped table-fixed-header table-bordered">
          <thead>
              <tr>
                  <th>Header 1</th>
                  <th>Header 2</th>
                  <th>Header 3</th>
                  <th>Header 4</th>
                  <th>Header 5</th>
              </tr>
          </thead>
          <tbody class='scrollbar-inner'>
              <tr>
                  <td>Col 1</td>
                  <td>Col 2</td>
                  <td>Col 3</td>
                  <td>Col 4</td>
                  <td>Col 5</td>
              </tr>
              <tr>
                  <td>Col 1</td>
                  <td>Col 2</td>
                  <td>Col 3</td>
                  <td>Col 4</td>
                  <td>Col 5</td>
              </tr>
              <tr>
                  <td>Col 1</td>
                  <td>Col 2</td>
                  <td>Col 3</td>
                  <td>Col 4</td>
                  <td>Col 5</td>
              </tr>
              <tr>
                  <td>Col 1</td>
                  <td>Col 2</td>
                  <td>Col 3</td>
                  <td>Col 4</td>
                  <td>Col 5</td>
              </tr>
              <tr>
                  <td>Col 1</td>
                  <td>Col 2</td>
                  <td>Col 3</td>
                  <td>Col 4</td>
                  <td>Col 5</td>
              </tr>
          </tbody>
      </table>
</div>
    `;

    this.componentData.css = `
    table-fixed-header {
      td, th {
          min-width: 80px;
      }
  
      thead {
          display: block;
          width: 100%;
      }
  
      
      tbody {
          display: block;
          max-height: 200px;
          overflow: auto;
          width: 100%;
          tr {
              display: table;
              width: 100%;
          }
      }
  }
    `;
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    Rainbow.color();
  }
}
