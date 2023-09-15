import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { MenuComponent } from './components/menu/menu.component';
import { MenubarModule } from 'primeng/menubar';
import { AddNewEmployeeComponent } from './components/add-new-employee/add-new-employee.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { ViewEmployeeComponent } from './components/view-employee/view-employee.component';
import { CheckboxModule } from 'primeng/checkbox';
import { InputNumberModule } from 'primeng/inputnumber';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AddNewEmployeeComponent,
    DashboardComponent,
    ViewEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MenubarModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    TabViewModule,
    CardModule,
    ChartModule,
    CheckboxModule,
    InputNumberModule,
    TableModule,
    TooltipModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
