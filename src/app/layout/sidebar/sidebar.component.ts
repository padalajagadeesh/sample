import { Component } from '@angular/core';
import { commonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SideBarComponent {
  title = 'my-first-project';
  isCollapsed = false;
  mainValue=  false;
 constructor(private cm:commonService){}
  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
  ngOnInit() {
    this.cm.flag$.subscribe((value) => {
      this.mainValue = value;
      console.log('Flag changed to:', value);
    });
  }
  
}
