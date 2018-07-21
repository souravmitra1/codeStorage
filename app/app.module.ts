import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MODULE_ROUTES, MODULE_COMPONENTS } from './Configuration/Routing/app-routing.component';
import { RouterModule } from '@angular/router';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ErrorComponent } from './error/error.component';
import { UserRoutingModule } from './User/User-Routing';
import { BusUserSummaryComponent } from './Admin/TransportServiceManagement/bus-user-summary/bus-user-summary.component';
import { AdminRoutingModule } from './Admin/admin-routing-module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    schemas: [],
    declarations: [
        MODULE_COMPONENTS,
        HomeComponent,
        UserLoginComponent,
        ErrorComponent,
        BusUserSummaryComponent,
        UnauthorizedComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        RouterModule.forRoot(MODULE_ROUTES),
        UserRoutingModule,
        AdminRoutingModule,
        ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
        HttpModule,
        HttpClientModule
    ],
    providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }],
    bootstrap: [HomeComponent],
    exports: [
    ]
})
export class AppModule {

}