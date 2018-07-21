import { Component, OnInit } from '@angular/core';
import { SystemConfiguration } from '../Configuration/system.config';
import { UserLogin } from './user-login';
import { Router } from "@angular/router";
import { AccountServiceService } from "../Framework/Account/account-service.service";
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Component({
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
    public userInfoModel = new UserLogin();
    public systemConfigs: SystemConfiguration;
    public submitted: boolean;
    constructor(private http: Http, private router: Router, private accountService: AccountServiceService) { 
    }
    ngOnInit(): void {
        this.systemConfigs = new SystemConfiguration();
    }
    onSubmit(form: any) {
        if (form.valid) {
            this.submitted = true;
            this.accountService.Login(this.userInfoModel, ($done) => {
                debugger 
                if (this.userInfoModel.emailId === `admin@codestorage.com`)
                    this.router.navigate(['/App/Admin']);
                else
                    this.router.navigate(['/App/User']);
            }, ($error) => {
                debugger
            });
        }
    }
}