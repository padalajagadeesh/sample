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
constructor(private cm :commonService){}
  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    this.cm.setFlag(this.isCollapsed);
  }

}
