import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { DepartmentsComponent } from './pages/departments/departments.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { LeaveRequestsComponent } from './pages/leave-requests/leave-requests.component';
import { SettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'attendance', component: AttendanceComponent },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'leaves', component: LeaveRequestsComponent },
  { path: 'settings', component: SettingsComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
