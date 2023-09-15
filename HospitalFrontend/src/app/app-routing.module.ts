import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewEmployeeComponent } from './components/add-new-employee/add-new-employee.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ViewEmployeeComponent } from './components/view-employee/view-employee.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path:'', component : DashboardComponent},
    { path: 'add-new-employee', component: AddNewEmployeeComponent },
    { path: 'view-employees', component: ViewEmployeeComponent}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
