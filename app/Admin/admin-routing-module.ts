import { NgModule ,ApplicationRef, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BrowserModule } from '@angular/platform-browser'; 
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AdminHomeComponent } from "./admin-home/admin-home.component";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { BusUserSummaryComponent } from "./TransportServiceManagement/bus-user-summary/bus-user-summary.component";

const adminRoutes: Routes = [{ 
    path: 'App/Admin',  
    component: AdminHomeComponent,
    children: [
      { path:'', redirectTo: 'Dashboard',pathMatch: 'full', data:{ title: 'Admin Dashboard' }},
      { path:'Dashboard', component: AdminDashboardComponent , data:{ title: 'Admin Dashboard' }},
      { path:'Bus/User/Summary', component: BusUserSummaryComponent , data:{ title: 'Bus User Summary Dashboard' }}
    ]
  }];


  @NgModule({
    declarations: [
      AdminHomeComponent,
      AdminDashboardComponent
    ],
    imports: [ 
      RouterModule.forChild(adminRoutes), 
      CommonModule,
      ReactiveFormsModule,
      FormsModule 
    ],
    exports: [ 
      RouterModule,
      AdminDashboardComponent
    ]
  })
export class AdminRoutingModule{

}