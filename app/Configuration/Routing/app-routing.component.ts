import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router'; 
import { UserLoginComponent } from '../../user-login/user-login.component';
import { ErrorComponent } from '../../error/error.component';
import { UserDashboardComponent } from '../../User/dashboard/user-dashboard.component';
import { HomeComponent } from '../../home/home.component';

export const MODULE_ROUTES: Route[] =[ 
  { path: '', redirectTo: 'Login', pathMatch: 'full',data: {title:`Login`} },
  { path: 'Login', component: UserLoginComponent, pathMatch: 'full',data: {title:`Login`} },  
  { path: '**',component: ErrorComponent,data: {title:`File not found`} }
]
export const MODULE_COMPONENTS = [
  HomeComponent
]