import { Component } from '@angular/core';
import ApexCharts from 'apexcharts'
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  panelOpenState = false;
  toggle(){
    document.body.classList.toggle("open")
  }
  removeclass(){
    document.body.classList.remove("open")
    
  }
  addclass(){
    document.body.classList.add("open")

  }

}
