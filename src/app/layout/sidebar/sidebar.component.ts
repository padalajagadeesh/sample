import { Component } from '@angular/core';
import { commonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SideBarComponent {
  title = 'my-first-project';
  isCollapsed = false;
  mainValue=  false;
  togglevalue = false;
 constructor(private cm:commonService){}
  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
  ngOnInit() {
    this.cm.flag$.subscribe((value) => {
      this.mainValue = value;
       //this.togglevalue = !this.togglevalue;
      console.log('Flag changed to:', value);
    });
  }
  roterClick(){
    console.log('111::router')
    // if(!this.mainValue){
      setTimeout(()=>{
        this.togglevalue = !this.togglevalue;
      },1000)
    // }
  }
}
