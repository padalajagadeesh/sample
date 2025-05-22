import { Component } from '@angular/core';
import { commonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavBarComponent {
  showDropdown = false;
  isCollapsed = false;
  mainValue = false;
constructor(private cm :commonService){}
  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    this.cm.setFlag(this.isCollapsed);
  }
 ngOnInit() {
    this.cm.flag$.subscribe((value) => {
      this.mainValue = value;
       //this.togglevalue = !this.togglevalue;
      console.log('Flag changed to:', value);
    });
  }

}
