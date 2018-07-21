import { Injectable } from '@angular/core';
import { BaseService } from '../Service/base-service.service';
import { UserLogin } from '../../user-login/user-login';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class AccountServiceService extends BaseService {
    constructor(private httpservice: Http) { super(httpservice); }
    public Login(data: UserLogin, doneHandler: (done: any) => void,
        errorHandler?: (error: any) => void,
        completeHandler?: () => void) {
        return this.put('/api/accounts/v1.0/Login', data);
    }
}
