import { NgModule ,ApplicationRef, CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserDashboardComponent } from "./dashboard/user-dashboard.component";
import { TransportServiceComponent } from "./transport-service/transport-service.component";
import { HomeComponent } from "./home/home.component";
  
import { BrowserModule } from '@angular/platform-browser'; 
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AgmCoreModule } from '@agm/core';

import { AgmDirectionModule } from 'agm-direction'; 
import { BlogComponent } from "./blog/blog.component";
import { ProfileComponent } from "./profile/profile.component";
import { CodeSnippetComponent } from "./code-snippet/code-snippet.component";
import { MultiSelectDropdownDirective } from '../Configuration/Directive/MultiSelect/multi-select-dropdown.directive';

const userRoutes: Routes = [{ 
    path: 'App/User',  
    component: HomeComponent,
    children: [
      { path:'', redirectTo: 'Dashboard',pathMatch: 'full', data:{ title: 'User Dashboard' }}, 
      { path:'Dashboard', component: UserDashboardComponent , data:{ title: 'User Dashboard' }},
      { path:'Transport', component: TransportServiceComponent, data:{ title: 'User Transport' } },
      { path:'Forum', component: BlogComponent , data:{ title: 'User Forum' }},
      { path:'Profile', component: ProfileComponent , data:{ title: 'User Profile' }},
      { path:'Add/Code-Snippet', component: CodeSnippetComponent , data: { title: 'Add Snippet' }},
      { path:'Edit/Code-Snippet/:id/:name', component: CodeSnippetComponent , data: { title: 'Edit Code Snippet' }},
      { path:'View/Code-Snippet/:id/:name', component: CodeSnippetComponent , data: { title: 'View Code Snippet' }}
    ]
  }];
 
@NgModule({
    declarations: [
      TransportServiceComponent,
      UserDashboardComponent,
      HomeComponent,
      BlogComponent,
      ProfileComponent,
      CodeSnippetComponent,
      
      MultiSelectDropdownDirective
    ],
    imports: [ 
      RouterModule.forChild(userRoutes),
      AgmCoreModule.forRoot({
        apiKey: 'AIzaSyA7gY1LEMnZUaGFZy2Upb1TutlxC7D35s4',
        libraries: ["places"]
      }),
      AgmDirectionModule,
      CommonModule,
      ReactiveFormsModule,
      FormsModule 
    ],
    exports: [ 
      RouterModule,
      TransportServiceComponent,
      UserDashboardComponent,
      HomeComponent
    ]
  })
export class UserRoutingModule{
}